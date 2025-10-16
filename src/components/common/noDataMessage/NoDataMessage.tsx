import './NoDataMessage.css';

type NoDataMessageProps = {
  Icon: any;
  message: string;
};

const NoDataMessage = ({ Icon, message }: NoDataMessageProps) => {
  return (
    <div className="message-container">
      <Icon className="icon" />
      <div>{message}</div>
    </div>
  );
};

export default NoDataMessage;
