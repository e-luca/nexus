import { ReactNode, useEffect, useState } from 'react';
import './Products.css';
import { Product } from '../../models/product';
import { useFetch } from '../../utils/hooks/useFetch';
import CardList from '../common/cardList/CardList';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';
import ErrorMessage from '../common/errorMessage/ErrorMessage';
import NoDataMessage from '../common/noDataMessage/NoDataMessage';
import { FaBox, FaCircleInfo } from 'react-icons/fa6';
import ProductCard from './productCard/ProductCard';
import SearchBar from '../common/searchBar/SearchBar';
import { Tooltip } from 'react-tooltip';

const Products = () => {
  const [skip, setSkip] = useState<number>(0);
  const [cards, setCards] = useState<ReactNode[]>([]);
  const { data, loading, error } = useFetch<{ products: Product[] }>(
    `${process.env.REACT_APP_PRODUCTS_API_URL!}?limit=20&skip=${skip}`
  );
  const InfoIcon = FaCircleInfo as any;

  function handleScrollEnd() {
    setSkip((prevSkip) => prevSkip + 20);
  }

  function handleSearch(searchTerm: string) {
    if (!searchTerm) return;
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

  if (loading && !cards.length) return <LoadingSpinner />;

  if (error) return <ErrorMessage />;

  return (
    <div className="products-container">
      {!cards.length ? (
        <NoDataMessage Icon={FaBox} message="No products found!" />
      ) : (
        <>
          <div className="products-header">
            <SearchBar
              placeholder="Search for products..."
              onSearch={handleSearch}
            />
            <InfoIcon
              className="info-icon"
              data-tooltip-id="search-info-tooltip"
              data-tooltip-content="Search products only by matching words in title or description."
            />
            <Tooltip id="search-info-tooltip" place="top" />
          </div>

          <CardList cards={cards} onScrollEnd={handleScrollEnd} />
        </>
      )}
    </div>
  );
};

export default Products;
