import { FaClock, FaStar, FaTags } from 'react-icons/fa6';
import { Recipe } from '../../../models/recipe';
import './RecipeCard.css';
import '../../common/styles/Cards.css';

type RecipeCardProps = {
  recipe: Recipe;
  action: () => void;
};
const RecipeCard = ({ recipe, action }: RecipeCardProps) => {
  const RatingIcon = FaStar as any;
  const TagIcon = FaTags as any;
  const TimeIcon = FaClock as any;
  return (
    <div className="card" onClick={action}>
      <div className="card-header">
        <img src={recipe.image} alt={recipe.name} className="card-image" />
        <span className="card-title">{recipe.name}</span>
      </div>
      <div className="card-body">
        <div className="rating-wrapper">
          <span className="rating">
            <RatingIcon className="rating-icon" /> {recipe.rating}
          </span>
          <span className="prep-time">
            <TimeIcon /> {recipe.prepTimeMinutes} min
          </span>
        </div>
        <div className="">Difficulty: {recipe.difficulty}</div>
        <div className="card-tags">
          <TagIcon />
          {recipe.tags.map((tag, idx) => (
            <span key={idx}>#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
