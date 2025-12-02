import { useParams } from 'react-router-dom';
import { useFetch } from '../../../utils/hooks/useFetch';
import { Recipe } from '../../../models/recipe';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';
import LoadingSpinner from '../../common/loadingSpinner/LoadingSpinner';
import NoDataMessage from '../../common/noDataMessage/NoDataMessage';
import { FaBowlRice } from 'react-icons/fa6';

const RecipeDetails = () => {
  const { id: recipeId } = useParams<{ id: string }>();
  const {
    data: recipe,
    error,
    loading,
  } = useFetch<Recipe>(`${process.env.REACT_APP_RECIPES_API_URL!}/${recipeId}`);
  const RecipeIcon = FaBowlRice as any;

  if (error)
    return (
      <div>
        <ErrorMessage />
      </div>
    );
  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  return (
    <div>
      {!recipe ? (
        <NoDataMessage
          Icon={RecipeIcon}
          message="No details for this recipe available"
        />
      ) : (
        <div>
          <div>
            <img src={recipe.image} alt={recipe.name} />
            <span>{recipe.name}</span>
          </div>
          <div> </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
