import { data, useParams } from 'react-router-dom';
import './ProductDetails.css';
import { useFetch } from '../../../utils/hooks/useFetch';
import { Product } from '../../../models/product';
import LoadingSpinner from '../../common/loadingSpinner/LoadingSpinner';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';
import NoDataMessage from '../../common/noDataMessage/NoDataMessage';
import { FaBox } from 'react-icons/fa6';

const ProductDetails = () => {
  const { id: productId } = useParams<{ id: string }>();
  const {
    data: product,
    error,
    loading,
  } = useFetch<Product>(
    `${process.env.REACT_APP_PRODUCTS_API_URL!}/${productId}`
  );

  if (loading)
    return (
      <div className="product-details-container">
        <LoadingSpinner />
      </div>
    );

  if (error)
    return (
      <div className="product-details-container">
        <ErrorMessage />
      </div>
    );

  return (
    <div className="product-details-container">
      {!data ? (
        <NoDataMessage Icon={FaBox} message="No product details available" />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ProductDetails;
