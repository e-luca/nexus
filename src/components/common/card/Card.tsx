import './Cards.css';
import { FaClock, FaStar, FaTags } from 'react-icons/fa6';

type CardProps = {
  title: string;
  image: string;
  rating: number;
  tags: string[];
  category?: string;
  description?: string;
  price?: number;
  prepTimeMinutes?: number;
  difficulty?: string;
  action: () => void;
};
const Card = ({
  title,
  image,
  rating,
  tags,
  category,
  description,
  price,
  prepTimeMinutes,
  difficulty,
  action,
}: CardProps) => {
  const RatingIcon = FaStar as any;
  const TagIcon = FaTags as any;
  const TimeIcon = FaClock as any;

  return (
    <div className="card" onClick={action}>
      <div className="card-header">
        <img
          src={image}
          alt={description ? description : title}
          className="card-image"
        />
        <span className="card-title">{title}</span>
      </div>
      <div className="card-body">
        <div className="rating-wrapper">
          <span className="rating">
            <RatingIcon className="rating-icon" /> {rating}
          </span>
          {prepTimeMinutes && (
            <span className="prep-time">
              <TimeIcon /> {prepTimeMinutes} min
            </span>
          )}

          {price && <span>${price}</span>}
        </div>
        {difficulty && <div className="">Difficulty: {difficulty}</div>}
        {category && (
          <div className="product-category">Category: {category}</div>
        )}
        <div className="card-tags">
          <TagIcon />
          {tags.map((tag, idx) => (
            <span key={idx}>#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
