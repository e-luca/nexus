import { ReactNode, useEffect } from 'react';
import './CardList.css';

type CardListProps = {
  cards: ReactNode[];
  onScrollEnd: () => void;
};

const CardList = ({ cards, onScrollEnd }: CardListProps) => {
  function handleScroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 10) {
      onScrollEnd();
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="card-list-container">{cards}</div>;
};

export default CardList;
