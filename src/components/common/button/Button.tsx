import './Button.css';

type ButtonProps = {
  type: 'primary' | 'secondary';
  text: string;
  disabled?: boolean;
  onClickAction: () => void;
};

const Button = ({ type, text, disabled, onClickAction }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button ${type}`}
      onClick={onClickAction}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
