import './Home.css';
import Quote from './quote/Quote';
import RandomToDo from './randomToDo/RandomToDo';
import SuggestedRecipes from './suggestedRecipes/SuggestedRecipes';

const Home = () => {
  return (
    <div>
      <Quote />
      <RandomToDo />
      <SuggestedRecipes />
    </div>
  );
};

export default Home;
