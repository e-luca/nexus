import { ToDo } from '../../../models/toDo';
import { useFetch } from '../../../utils/hooks/useFetch';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';
import LoadingSpinner from '../../common/loadingSpinner/LoadingSpinner';
import NoDataMessage from '../../common/noDataMessage/NoDataMessage';
import { FaClipboardList } from 'react-icons/fa6';
import './RandomToDo.css';

const RandomToDo = () => {
  const { data, error, loading } = useFetch<ToDo>(
    `${process.env.REACT_APP_TODO_API_URL!}/random`
  );
  const ChecklistIcon = FaClipboardList as any;

  if (error) return <ErrorMessage />;
  if (loading) return <LoadingSpinner />;
  return data ? (
    <div className="todo-container">
      <span className="todo-title">Suggested ToDo for today!</span>
      <span className="todo-content">{data.todo}</span>
    </div>
  ) : (
    <NoDataMessage
      Icon={ChecklistIcon}
      message="No suggested ToDo available."
    />
  );
};

export default RandomToDo;
