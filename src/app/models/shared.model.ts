/** jsonplacerholder post data type */
export interface Post {
  userId: 1;
  id: 1;
  title: string;
  body: string;
}

/** jsonplaceholder comment data type */
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
