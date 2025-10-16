import { FaExclamationCircle } from 'react-icons/fa';
import './ErrorMessage.css';

const ErrorMessage = () => {
  const ErrorIcon = FaExclamationCircle as any;

  return (
    <div className="message-container">
      <ErrorIcon className="error-icon" />
      <div>Error while loading data!</div>
    </div>
  );
};

export default ErrorMessage;
