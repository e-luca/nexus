import { ReactNode } from 'react';
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
  const { data, loading, error, refetch } = useFetch<{ products: Product[] }>(
    process.env.REACT_APP_PRODUCTS_API_URL!
  );

  const cards: ReactNode[] =
    data && data.products
      ? data.products.map((product) => (
          <ProductCard
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
        ))
      : [];

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage />;

  return (
    <>
      {!cards.length ? (
        <NoDataMessage Icon={FaBox} message="No products found!" />
      ) : (
        <CardList cards={cards} />
      )}
    </>
  );
};

export default Products;
