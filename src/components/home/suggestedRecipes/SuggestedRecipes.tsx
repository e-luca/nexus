import { Recipe } from '../../../models/recipe';
import { useFetch } from '../../../utils/hooks/useFetch';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';
import LoadingSpinner from '../../common/loadingSpinner/LoadingSpinner';
import './SuggestedRecipes.css';
import NoDataMessage from '../../common/noDataMessage/NoDataMessage';
import { FaClipboardList } from 'react-icons/fa6';

const SuggestedRecipes = () => {
  const {
    data: recipes,
    error,
    loading,
  } = useFetch<Recipe[]>(`${process.env.REACT_APP_RECIPES_API_URL!}?limit=3`);

  const RecipeIcon = FaClipboardList as any;

  if (error) return <ErrorMessage />;
  if (loading) return <LoadingSpinner />;

  return recipes ? (
    <div>
      {recipes.map((recipe, idx) => (
        <div key={idx}>
          <RecipeIcon />
          <span>{recipe.name}</span>
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
