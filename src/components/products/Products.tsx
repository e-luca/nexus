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

const Products = () => {
  const [skipCount, setSkipCount] = useState<number>(0);
  const [cards, setCards] = useState<ReactNode[]>([]);
  const { data, loading, error, refetch } = useFetch<{ products: Product[] }>(
    `${process.env.REACT_APP_PRODUCTS_API_URL!}?limit=20&skip=${
      skipCount === 0 ? 0 : skipCount
    }`
  );

  function handleScrollEnd() {
    setSkipCount(skipCount + 10);
  }

  function handleDataChange() {
    if (data && data.products) {
      const newCards = data.products.map((product) => (
        <ProductCard
          key={product.id}
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

      setCards([...cards, ...newCards]);
    }
  }

  useEffect(() => {
    handleDataChange();
  }, [data]);

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage />;

  return (
    <>
      {!cards.length ? (
        <NoDataMessage Icon={FaBox} message="No products found!" />
      ) : (
        <CardList cards={cards} onScrollEnd={handleScrollEnd} />
      )}
    </>
  );
};

export default Products;
