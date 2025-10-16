import React, { ReactNode } from 'react';

type CardListProps = {
  cards: ReactNode[];
};

const CardList = ({ cards }: CardListProps) => {
  return <>{cards}</>;
};

export default CardList;
