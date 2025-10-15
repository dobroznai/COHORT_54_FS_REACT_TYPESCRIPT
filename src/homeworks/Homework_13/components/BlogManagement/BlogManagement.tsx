import { useState, createContext, type ChangeEvent } from "react";
import { BlogManagementWrapper, CustomInput } from "./styles";
import Button from "components/Button/Button";

import Card from "homeworks/Homework_13/components/Card/Card";
import type { PostsContext } from "./types";

export const BlogManagementContext = createContext<PostsContext>({
  posts: [],
  setPosts: () => {},
});

function BlogManagement() {
  const [text, setText] = useState<string>("");
  const [posts, setPosts] = useState<string[]>([]);

  const onChangeTextAreaMessage = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setText(e.target.value);

  const postMessage = () => {
    if (text.trim() === "") {
      alert("Field is empty");
      return;
    }

    setPosts((prev) => [...prev, text]);

    setText("");
  };

  return (
    <BlogManagementContext.Provider value={{ posts, setPosts }}>
      <BlogManagementWrapper>
        <CustomInput
          as="textarea"
          name="text"
          value={text}
          placeholder="Enter text for new post"
          onChange={onChangeTextAreaMessage}
        />
        <Button name="Запостить" onClick={postMessage} />
        <Card />
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  );
}

export default BlogManagement;
