import { NavBarItem } from '../../models/navBarItem';
import { FaHouse, FaCircleInfo } from 'react-icons/fa6';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const items: NavBarItem[] = initNavBarItems();
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  function handleNavigate(path: string) {
    navigate(path);
  }

  function initNavBarItems(): NavBarItem[] {
    return [
      {
        name: 'Home',
        path: '/',
        icon: FaHouse,
      },
      {
        name: 'About',
        path: '/about',
        icon: FaCircleInfo,
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
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {hoveredItem && hoveredItem === item.name ? (
              <item.icon />
            ) : (
              item.name
            )}
          </div>
        ))}
      </nav>
    </section>
  );
};

export default NavBar;
