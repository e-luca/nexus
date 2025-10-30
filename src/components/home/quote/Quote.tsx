import { FaMessage } from 'react-icons/fa6';
import './Quote.css';
import { useFetch } from '../../../utils/hooks/useFetch';
import { Quote as QuoteData } from '../../../models/quote';
import NoDataMessage from '../../common/noDataMessage/NoDataMessage';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';
import LoadingSpinner from '../../common/loadingSpinner/LoadingSpinner';

const Quote = () => {
  const QuoteIcon = FaMessage as any;
  const {
    data: quote,
    error,
    loading,
  } = useFetch<QuoteData>(process.env.REACT_APP_QUOTE_API_URL!);

  if (error) return <ErrorMessage />;

  if (loading) return <LoadingSpinner />;

  return quote ? (
    <div className="quote-container">
      <span className="quote-content">„{quote.quote}”</span>
      <span className="quote-author">{quote.author}</span>
    </div>
  ) : (
    <NoDataMessage Icon={QuoteIcon} message="No available quote to show!" />
  );
};

export default Quote;
