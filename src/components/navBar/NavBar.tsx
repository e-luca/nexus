import { NavBarItem } from '../../models/navBarItem';
import { FaHouse, FaCircleInfo } from 'react-icons/fa6';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const items: NavBarItem[] = initNavBarItems();
  const navigate = useNavigate();

  function handleNavigate(path: string) {
    navigate(path);
  }

  function initNavBarItems(): NavBarItem[] {
    return [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'About',
        path: '/about',
      },
    ];
  }
  return (
    <section>
      <nav>
        {items.map((item, idx) => (
          <div
            className="nav-item"
            key={idx}
            onClick={() => handleNavigate(item.path)}
          >
            {item.name}
          </div>
        ))}
      </nav>
    </section>
  );
};

export default NavBar;
