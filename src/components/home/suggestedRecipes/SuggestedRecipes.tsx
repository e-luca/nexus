import { Recipe } from '../../../models/recipe';
import { useFetch } from '../../../utils/hooks/useFetch';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';
import LoadingSpinner from '../../common/loadingSpinner/LoadingSpinner';
import './SuggestedRecipes.css';
import NoDataMessage from '../../common/noDataMessage/NoDataMessage';
import { FaBowlRice } from 'react-icons/fa6';

const SuggestedRecipes = () => {
  const { data, error, loading } = useFetch<{ recipes: Recipe[] }>(
    `${process.env.REACT_APP_RECIPES_API_URL!}?limit=3`
  );

  const RecipeIcon = FaBowlRice as any;

  if (error) return <ErrorMessage />;
  if (loading) return <LoadingSpinner />;

  return data && data.recipes && data.recipes.length ? (
    <div className="suggested-recipes-container">
      {data.recipes.map((recipe, idx) => (
        <div key={idx} className="suggested-recipe-card">
          <div className="suggested-recipe-card-icon-name">
            <RecipeIcon className="recipe-icon" />
            <span className="recipe-title">{recipe.name}</span>
          </div>
          <div className="suggested-recipe-card-info">
            <span>Prep: {recipe.prepTimeMinutes} min</span>
            <span>Difficulty: {recipe.difficulty}</span>
            <span>Type: {recipe.mealType}</span>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <NoDataMessage
      Icon={RecipeIcon}
      message="No suggested recipes available."
    />
  );
};

export default SuggestedRecipes;
