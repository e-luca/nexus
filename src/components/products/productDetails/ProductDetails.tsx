import { data, useParams } from 'react-router-dom';
import './ProductDetails.css';
import { useFetch } from '../../../utils/hooks/useFetch';
import { Product } from '../../../models/product';
import LoadingSpinner from '../../common/loadingSpinner/LoadingSpinner';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';
import NoDataMessage from '../../common/noDataMessage/NoDataMessage';
import { FaBox } from 'react-icons/fa6';
import ImageSlider from '../../common/imageSlider/ImageSlider';
import ProductReviews from '../productReviews/ProductReviews';

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
            <fieldset className="product-details-description">
              <legend className="border-text">Description</legend>
              {product.description}
            </fieldset>
            <fieldset className="product-details-info-content">
              <legend className="border-text">Info</legend>
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
            </fieldset>
            <fieldset className="product-details-info-content">
              <legend className="border-text">Dimensions</legend>
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
            </fieldset>
            <fieldset className="product-details-info-content">
              <legend className="border-text">Policies & Status</legend>
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
            </fieldset>

            <fieldset className="product-details-info-content">
              <legend className="border-text"> Meta Data</legend>
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
            </fieldset>
            <ImageSlider
              images={product.images}
              altText={product.description}
            />
            <ProductReviews reviews={product.reviews} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
