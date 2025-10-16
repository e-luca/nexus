import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import { AppRoute } from './models/appRoute';
import Products from './components/products/Products';

function App() {
  const routes: AppRoute[] = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/products', element: <Products /> },
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
