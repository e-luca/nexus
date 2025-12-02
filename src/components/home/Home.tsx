import './Home.css';
import Quote from './quote/Quote';
import RandomToDo from './randomToDo/RandomToDo';
import SuggestedRecipes from './suggestedRecipes/SuggestedRecipes';

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">Welcome to Nexus</div>
      <div className='home-description'>This is the place where different worlds of information collide. If you are more interested, you can always visit our About page and discover what is this all about.</div>
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
