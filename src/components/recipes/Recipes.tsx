import { ReactNode, useEffect, useState } from 'react';
import '../common/styles/pageLayout.css';
import { useFetch } from '../../utils/hooks/useFetch';
import { Recipe } from '../../models/recipe';
import CardList from '../common/cardList/CardList';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../common/errorMessage/ErrorMessage';
import NoDataMessage from '../common/noDataMessage/NoDataMessage';
import { FaBowlRice } from 'react-icons/fa6';
import InfoTooltip from '../common/infoTooltip/InfoTooltip';
import SearchBar from '../common/searchBar/SearchBar';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';
import Card from '../common/card/Card';
const Recipes = () => {
  const [cards, setCards] = useState<ReactNode[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [url, setUrl] = useState<string>(
    `${process.env.REACT_APP_RECIPES_API_URL!}?limit=20&skip=0`
  );
  const { data, error, loading } = useFetch<{ recipes: Recipe[] }>(url);
  const navigate = useNavigate;

  function handleDataChange() {
    if (data && data.recipes) {
      setCards((prevCards) => {
        const existingIds = new Set(prevCards.map((card: any) => card.key));
        const newCards = data.recipes
          .filter((r) => !existingIds.has(r.id.toString()))
          .map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.name}
              image={recipe.image}
              rating={recipe.rating}
              tags={recipe.tags}
              prepTimeMinutes={recipe.prepTimeMinutes}
              difficulty={recipe.difficulty}
              action={() => {}}
            />
          ));

        return [...prevCards, ...newCards];
      });
    }
  }

  function handleScrollEnd() {
    setSkip((prevSkip) => prevSkip + 20);
  }

  function handleSearch(searchTerm: string) {
    setSearchQuery(searchTerm);
    if (!searchTerm) {
      setSkip(0);
      setCards([]);
      setUrl(`${process.env.REACT_APP_RECIPES_API_URL!}?limit=20&skip=0`);
      return;
    }

    setCards([]);
    setUrl(
      `${process.env.REACT_APP_RECIPES_SEARCH_API_URL!}?q=${encodeURIComponent(
        searchTerm
      )}`
    );
  }

  useEffect(() => {
    handleDataChange();
  }, [data]);

  useEffect(() => {
    if (!url.includes(process.env.REACT_APP_RECIPES_SEARCH_API_URL!)) {
      setUrl(`${process.env.REACT_APP_RECIPES_API_URL!}?limit=20&skip=${skip}`);
    }
  }, [skip]);

  if (loading && !cards.length)
    return (
      <div className="page-container">
        <LoadingSpinner />
      </div>
    );

  if (error)
    return (
      <div className="page-container">
        <ErrorMessage />
      </div>
    );

  return (
    <div className="page-container">
      {!cards.length ? (
        <NoDataMessage Icon={FaBowlRice} message="No recipes found!" />
      ) : (
        <>
          <div className="page-header">
            <SearchBar
              placeholder="Search for recipes..."
              initValue={searchQuery}
              onSearch={handleSearch}
            />
            <InfoTooltip content="Search recipes only by matching words in name." />
          </div>

          <CardList cards={cards} onScrollEnd={handleScrollEnd} />
        </>
      )}
    </div>
  );
};

export default Recipes;
