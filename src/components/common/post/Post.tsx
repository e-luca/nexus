import { FaEye, FaThumbsDown, FaThumbsUp } from 'react-icons/fa6';
import { Post as PostModel } from '../../../models/post';
import './Post.css';

type PostProps = {
  post: PostModel;
  action: () => void;
};

const Post = ({ post }: PostProps) => {
  const LikeIcon = FaThumbsUp as any;
  const DislikeIcon = FaThumbsDown as any;
  const ViewsIcon = FaEye as any;
  return (
    <div>
      <div>
        <span>{post.title}</span>
      </div>
      <div>
        <div>{post.body}</div>
        {post.tags.map((tag, idx) => (
          <div key={idx}>{tag}</div>
        ))}
        <div>
          <span>
            <LikeIcon />
            {post.reactions.likes}
          </span>
          <span>
            <DislikeIcon />
            {post.reactions.dislikes}
          </span>
          <span>
            <ViewsIcon />
            {post.views}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
