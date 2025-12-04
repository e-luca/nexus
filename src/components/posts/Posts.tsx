import { ReactNode, useEffect, useState } from 'react';
import { Post } from '../../models/post';
import { useFetch } from '../../utils/hooks/useFetch';
import './Posts.css';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';
import ErrorMessage from '../common/errorMessage/ErrorMessage';
const Posts = () => {
  const [skip, setSkip] = useState<number>(0);
  const [posts, setPosts] = useState<ReactNode[]>([]);
  const [url, setUrl] = useState<string>(
    `${process.env.REACT_APP_POSTS_API_URL}?limit=20&skip=0`
  );
  const { data, error, loading } = useFetch<{ posts: Post[] }>(url);

  function handleScrollEnd() {
    setSkip((prevSkip) => prevSkip + 20);
  }

  function handleDataChange() {}

  useEffect(() => {
    setUrl(`${process.env.REACT_APP_POSTS_API_URL}?limit=20&skip=${skip}`);
  }, [skip]);

  useEffect(() => {
    handleDataChange();
  }, [data]);

  if (loading && !posts.length) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <ErrorMessage />
      </div>
    );
  }
  return <></>;
};

export default Posts;
