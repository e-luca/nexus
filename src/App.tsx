import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import { AppRoute } from './models/appRoute';
import Products from './components/products/Products';
import ProductDetails from './components/products/productDetails/ProductDetails';
import Recipes from './components/recipes/Recipes';
import RecipeDetails from './components/recipes/recipeDetails/RecipeDetails';
import Posts from './components/posts/Posts';

function App() {
  const routes: AppRoute[] = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/products', element: <Products /> },
    { path: '/product/:id', element: <ProductDetails /> },
    { path: '/recipes', element: <Recipes /> },
    { path: '/recipe/:id', element: <RecipeDetails /> },
    { path: '/posts', element: <Posts /> },
  ];

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route path={path} element={element} key={idx} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
