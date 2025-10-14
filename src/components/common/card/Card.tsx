import './Card.css';

type CardProps = {
  title: string;
  imageUrl: string;
  altText: string;
  description: string;
  action: () => void;
};

const Card = ({ imageUrl, title, altText, description, action }: CardProps) => {
  return (
    <div className="card" onClick={action}>
      <div className="card-header">
        <img src={imageUrl} alt={altText} className="card-image" />
        <span className="card-title">{title}</span>
      </div>
      <div className="card-body">{description}</div>
    </div>
  );
};

export default Card;
