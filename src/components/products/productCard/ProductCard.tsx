import './ProductCard.css';
import { FaStar, FaTags } from 'react-icons/fa6';

type ProductCardProps = {
  id: number;
  title: string;
  imageUrl: string;
  altText: string;
  category: string;
  price: number;
  rating: number;
  tags: string[];
  action: () => void;
};

const ProductCard = ({
  id,
  title,
  imageUrl,
  altText,
  category,
  price,
  rating,
  tags,
  action,
}: ProductCardProps) => {
  const RatingIcon = FaStar as any;
  const TagIcon = FaTags as any;

  return (
    <div className="product-card" onClick={action} key={id}>
      <div className="product-card-header">
        <img src={imageUrl} alt={altText} className="product-card-image" />
        <span className="product-card-title">{title}</span>
      </div>
      <div className="product-card-body">
        <div className="price-rating-wrapper">
          <span>
            <RatingIcon className="rating-icon" /> {rating}
          </span>
          <span>${price}</span>
        </div>
        <div className="product-category">Category: {category}</div>
        <div className="product-tags">
          <TagIcon />
          {tags.map((tag, idx) => (
            <span key={idx}>#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
