import { Product } from '../../../models/product';
import './ProductCard.css';
import '../../common/styles/Cards.css';
import { FaStar, FaTags } from 'react-icons/fa6';

type ProductCardProps = {
  product: Product;
  action: () => void;
};

const ProductCard = ({ product, action }: ProductCardProps) => {
  const RatingIcon = FaStar as any;
  const TagIcon = FaTags as any;

  return (
    <div className="card" onClick={action}>
      <div className="card-header">
        <img
          src={product.thumbnail}
          alt={product.description}
          className="card-image"
        />
        <span className="card-title">{product.title}</span>
      </div>
      <div className="card-body">
        <div className="rating-wrapper">
          <span>
            <RatingIcon className="rating-icon" /> {product.rating}
          </span>
          <span>${product.price}</span>
        </div>
        <div className="product-category">Category: {product.category}</div>
        <div className="card-tags">
          <TagIcon />
          {product.tags.map((tag, idx) => (
            <span key={idx}>#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
