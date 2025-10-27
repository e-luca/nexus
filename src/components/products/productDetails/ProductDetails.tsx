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
      {!product ? (
        <NoDataMessage Icon={FaBox} message="No product details available" />
      ) : (
        <div className="product-details-content">
          <div className="product-details-header">
            <img
              className="product-details-image"
              src={product.thumbnail}
              alt={product.description}
            />
            <span className="product-details-title">{product.title}</span>
          </div>
          <div className="product-details-body">
            Basic Info
            <div className="product-details-info-content">
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">
                  Category:
                </span>{' '}
                {product.category}
              </div>
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">Price:</span>{' '}
                {product.price}$
              </div>
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">Rating:</span>{' '}
                {product.rating}
              </div>
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">Brand:</span>{' '}
                {product.brand}
              </div>
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">Tags:</span>
                <span>
                  {product.tags.map((tag, idx) => (
                    <span key={idx}>#{tag} </span>
                  ))}{' '}
                </span>
              </div>
            </div>
            Dimensions
            <div className="product-details-info-content">
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">Width:</span>{' '}
                {product.dimensions.width} cm
              </div>
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">Height:</span>{' '}
                {product.dimensions.height} cm
              </div>
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">Depth:</span>{' '}
                {product.dimensions.depth} cm
              </div>
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">Weight:</span>{' '}
                {product.weight} kg
              </div>
            </div>
            Policies & Status
            <div className="product-details-info-content">
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">
                  Warranty Information:
                </span>{' '}
                {product.warrantyInformation}
              </div>
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">
                  Shipping Information:
                </span>{' '}
                {product.shippingInformation}
              </div>
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">
                  Availability Status:
                </span>{' '}
                {product.availabilityStatus}
              </div>
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">
                  Return Policy:
                </span>{' '}
                {product.returnPolicy}
              </div>
            </div>
            Meta Data
            <div className="product-details-info-content">
              <div className="product-details-info-tile">
                <span className="product-details-info-tile-title">Code:</span>{' '}
                {product.meta.barcode}
              </div>
              <div className="product-details-info-tile">
                <img
                  src={product.meta.qrCode}
                  alt="product qr code"
                  className="product-details-qrcode"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
