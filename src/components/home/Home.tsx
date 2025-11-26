import './Home.css';
import Quote from './quote/Quote';
import RandomToDo from './randomToDo/RandomToDo';
import SuggestedRecipes from './suggestedRecipes/SuggestedRecipes';

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">Welcome to Nexus</div>
      <div className="quote-column">
        <RandomToDo />
      </div>
      <div className="todo-column">
        <Quote />
      </div>

      <div className="recipes-column">
        <SuggestedRecipes />
      </div>
    </div>
  );
};

export default Home;
