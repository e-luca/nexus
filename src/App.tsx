import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import { AppRoute } from './models/appRoute';

function App() {
  const routes: AppRoute[] = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
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
