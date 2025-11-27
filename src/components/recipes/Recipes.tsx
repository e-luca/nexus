import { ReactNode, useEffect, useState } from 'react';
import './Recipes.css';
import { useFetch } from '../../utils/hooks/useFetch';
import { Recipe } from '../../models/recipe';
import RecipeCard from './recipeCard/RecipeCard';
import CardList from '../common/cardList/CardList';
const Recipes = () => {
  const [cards, setCards] = useState<ReactNode[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [url, setUrl] = useState<string>(
    `${process.env.REACT_APP_RECIPES_API_URL!}?limit=20&skip=0`
  );
  const { data, error, loading } = useFetch<{ recipes: Recipe[] }>(url);

  function handleDataChange() {
    if (data && data.recipes) {
      setCards((prevCards) => {
        const existingIds = new Set(prevCards.map((card: any) => card.key));
        const newCards = data.recipes
          .filter((r) => !existingIds.has(r.id.toString()))
          .map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} action={() => {}} />
          ));

        return [...prevCards, ...newCards];
      });
    }
  }

  function handleScrollEnd() {
    setSkip((prevSkip) => prevSkip + 20);
  }

  useEffect(() => {
    handleDataChange();
  }, [data]);
  return (
    <>
      <CardList cards={cards} onScrollEnd={handleScrollEnd} />
    </>
  );
};

export default Recipes;
