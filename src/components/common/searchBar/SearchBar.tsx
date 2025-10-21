import { ChangeEvent, useState } from 'react';
import Button from '../button/Button';
import './SearchBar.css';

type SearchBarProps = {
  placeholder: string;
  onSearch: (value: string) => void;
};

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  function handleChangeInputValue(e: ChangeEvent<HTMLInputElement>) {
    if (!e || !e.target) return;
    e.preventDefault();
    setSearchValue(e.target.value);
  }

  function handleClick() {
    onSearch(searchValue);
  }

  return (
    <div className="search-bar-container">
      <input
        type="search"
        className="search-bar"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => handleChangeInputValue(e)}
      />
      <Button type="primary" text="Search" onClickAction={handleClick} />
    </div>
  );
};

export default SearchBar;
