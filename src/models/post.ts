export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: PostReaction;
  views: number;
  userId: number;
};

type PostReaction = {
  likes: number;
  dislikes: number;
};
