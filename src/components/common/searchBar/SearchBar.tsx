import Button from '../button/Button';
import './SearchBar.css';

type SearchBarProps = {
  placeholder: string;
};

const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className="search-bar-container">
      <input type="search" className="search-bar" placeholder={placeholder} />
      <Button type="primary" text="Search" onClickAction={() => {}} />
    </div>
  );
};

export default SearchBar;
