import { useParams } from 'react-router-dom';
import { useFetch } from '../../../utils/hooks/useFetch';
import { Recipe } from '../../../models/recipe';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';
import LoadingSpinner from '../../common/loadingSpinner/LoadingSpinner';
import NoDataMessage from '../../common/noDataMessage/NoDataMessage';
import { FaBowlRice } from 'react-icons/fa6';
import '../../common/styles/detailsPageLayout.css';
import './RecipeDetails.css';
import { useMemo } from 'react';

const RecipeDetails = () => {
  const { id: recipeId } = useParams<{ id: string }>();
  const {
    data: recipe,
    error,
    loading,
  } = useFetch<Recipe>(`${process.env.REACT_APP_RECIPES_API_URL!}/${recipeId}`);
  const RecipeIcon = FaBowlRice as any;

  const instructions = useMemo(() => {
    if (!recipe) return;

    return recipe.instructions.map((instruction) => `${instruction} `);
  }, [recipe]);

  if (error)
    return (
      <div className="details-page-container">
        <ErrorMessage />
      </div>
    );
  if (loading)
    return (
      <div className="details-page-container">
        <LoadingSpinner />
      </div>
    );
  return (
    <div className="details-page-container">
      {!recipe ? (
        <NoDataMessage
          Icon={RecipeIcon}
          message="No details for this recipe available"
        />
      ) : (
        <div className="details-page-content">
          <div className="details-page-header">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="details-page-image recipe-details-image"
            />
            <span className="details-page-title">{recipe.name}</span>
          </div>
          <div className="details-page-body">
            <fieldset className="instructions-ingredients">
              <legend className="border-text">Instructions</legend>
              {instructions}
            </fieldset>
            <fieldset className="instructions-ingredients">
              <legend className="border-text">Ingredients</legend>
              {recipe.ingredients.map((ingredient, idx) => (
                <div key={idx}>- {ingredient}</div>
              ))}
            </fieldset>
            <fieldset className="details-page-info-content">
              <legend className="border-text">Preparation Info</legend>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">
                  Preparation Time:
                </span>{' '}
                {recipe.prepTimeMinutes} min
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">
                  Cooking Time:
                </span>{' '}
                {recipe.cookTimeMinutes} min
              </div>
            </fieldset>
            <fieldset className="details-page-info-content">
              <legend className="border-text">Serving</legend>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Servings:</span>{' '}
                {recipe.servings}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">
                  Calories per Serving:
                </span>{' '}
                {recipe.caloriesPerServing}
              </div>
            </fieldset>
            <fieldset className="details-page-info-content">
              <legend className="border-text">Type</legend>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Meal type:</span>{' '}
                {recipe.mealType}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Cuisine:</span>{' '}
                {recipe.cuisine}
              </div>
            </fieldset>
            <fieldset className="details-page-info-content">
              <legend className="border-text">Review</legend>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Review:</span>{' '}
                {recipe.reviewCount}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Rating:</span>{' '}
                {recipe.rating}
              </div>
            </fieldset>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
