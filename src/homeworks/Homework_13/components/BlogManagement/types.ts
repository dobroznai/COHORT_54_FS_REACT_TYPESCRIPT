import { type Dispatch, type SetStateAction } from "react";

export interface PostsContext {
  posts: string[];
  setPosts: Dispatch<SetStateAction<string[]>>;
}
