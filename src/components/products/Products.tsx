import { ReactNode, useEffect, useRef, useState } from 'react';
import './Products.css';
import { Product } from '../../models/product';
import { useFetch } from '../../utils/hooks/useFetch';
import CardList from '../common/cardList/CardList';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';
import ErrorMessage from '../common/errorMessage/ErrorMessage';
import NoDataMessage from '../common/noDataMessage/NoDataMessage';
import { FaBox } from 'react-icons/fa6';
import ProductCard from './productCard/ProductCard';
import Search from '../common/search/Search';

const Products = () => {
  const [skip, setSkip] = useState<number>(0);
  const [cards, setCards] = useState<ReactNode[]>([]);
  const { data, loading, error } = useFetch<{ products: Product[] }>(
    `${process.env.REACT_APP_PRODUCTS_API_URL!}?limit=20&skip=${skip}`
  );

  function handleScrollEnd() {
    setSkip((prevSkip) => prevSkip + 20);
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
    <div>
      {!cards.length ? (
        <NoDataMessage Icon={FaBox} message="No products found!" />
      ) : (
        <>
          <Search />
          <CardList cards={cards} onScrollEnd={handleScrollEnd} />
        </>
      )}
    </div>
  );
};

export default Products;
