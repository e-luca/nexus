import { ProductReview } from '../../../models/product';
import './ProductReviews.css';
import NoDataMessage from '../../common/noDataMessage/NoDataMessage';
import { FaThumbsUp, FaStar } from 'react-icons/fa6';

type ProductReviewsProps = {
  reviews: ProductReview[];
};
const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  const CommentIcon = FaThumbsUp as any;
  const StarIcon = FaStar as any;

  function handleDateFormat(date: string) {
    return new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  return (
    <fieldset className="product-review-container">
      <legend className="border-text">Reviews</legend>
      {reviews.length > 0 ? (
        reviews.map((review, idx) => (
          <div key={idx} className="product-review">
            <span className="product-review-user-info">
              <span className="product-review-name">{review.reviewerName}</span>
              <span className="product-review-email">
                {review.reviewerEmail}
              </span>
            </span>

            <span className="product-review-comment">"{review.comment}"</span>
            <span className="product-review-rating">
              {Array.from({ length: review.rating }).map((_, idx) => (
                <StarIcon key={idx} />
              ))}
            </span>
            <span className="product-review-date">
              {handleDateFormat(review.date)}
            </span>
          </div>
        ))
      ) : (
        <NoDataMessage
          Icon={CommentIcon}
          message="No available reviews for this product!"
        />
      )}
    </fieldset>
  );
};

export default ProductReviews;
