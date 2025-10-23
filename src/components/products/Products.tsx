import { ReactNode, useEffect, useState } from 'react';
import './Products.css';
import { Product } from '../../models/product';
import { useFetch } from '../../utils/hooks/useFetch';
import CardList from '../common/cardList/CardList';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';
import ErrorMessage from '../common/errorMessage/ErrorMessage';
import NoDataMessage from '../common/noDataMessage/NoDataMessage';
import { FaBox } from 'react-icons/fa6';
import ProductCard from './productCard/ProductCard';
import SearchBar from '../common/searchBar/SearchBar';
import InfoTooltip from '../common/infoTooltip/InfoTooltip';

const Products = () => {
  const [skip, setSkip] = useState<number>(0);
  const [cards, setCards] = useState<ReactNode[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [url, setUrl] = useState<string>(
    `${process.env.REACT_APP_PRODUCTS_API_URL!}?limit=20&skip=0`
  );
  const { data, loading, error } = useFetch<{ products: Product[] }>(url);

  function handleScrollEnd() {
    setSkip((prevSkip) => prevSkip + 20);
  }

  function handleSearch(searchTerm: string) {
    setSearchQuery(searchTerm);
    if (!searchTerm) {
      setSkip(0);
      setCards([]);
      setUrl(`${process.env.REACT_APP_PRODUCTS_API_URL!}?limit=20&skip=0`);
      return;
    }

    setCards([]);
    setUrl(
      `${process.env.REACT_APP_PRODUCTS_SEARCH_API_URL!}?q=${encodeURIComponent(
        searchTerm
      )}`
    );
  }

  function handleDataChange() {
    if (data && data.products) {
      setCards((prevCards) => {
        const existingIds = new Set(prevCards.map((card: any) => card.key));
        const newCards = data.products
          .filter((p) => !existingIds.has(p.id.toString()))
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              category={product.category}
              imageUrl={product.thumbnail}
              altText={product.description}
              rating={product.rating}
              price={product.price}
              tags={product.tags}
              action={() => {}}
            />
          ));
        return [...prevCards, ...newCards];
      });
    }
  }

  useEffect(() => {
    handleDataChange();
  }, [data]);

  useEffect(() => {
    if (!url.includes(process.env.REACT_APP_PRODUCTS_SEARCH_API_URL!)) {
      setUrl(
        `${process.env.REACT_APP_PRODUCTS_API_URL!}?limit=20&skip=${skip}`
      );
    }
  }, [skip]);

  if (loading && !cards.length)
    return (
      <div className="products-container">
        <LoadingSpinner />
      </div>
    );

  if (error)
    return (
      <div className="products-container">
        <ErrorMessage />
      </div>
    );

  return (
    <div className="products-container">
      {!cards.length ? (
        <NoDataMessage Icon={FaBox} message="No products found!" />
      ) : (
        <>
          <div className="products-header">
            <SearchBar
              placeholder="Search for products..."
              initValue={searchQuery}
              onSearch={handleSearch}
            />
            <InfoTooltip content="Search products only by matching words in title or description." />
          </div>

          <CardList cards={cards} onScrollEnd={handleScrollEnd} />
        </>
      )}
    </div>
  );
};

export default Products;
