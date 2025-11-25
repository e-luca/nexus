import './Home.css';
import Quote from './quote/Quote';
import RandomToDo from './randomToDo/RandomToDo';
import SuggestedRecipes from './suggestedRecipes/SuggestedRecipes';

const Home = () => {
  return (
    <div className="home-container">
      <Quote />
      <RandomToDo />
      <div className="recipes-column">
        <SuggestedRecipes />
      </div>
    </div>
  );
};

export default Home;
