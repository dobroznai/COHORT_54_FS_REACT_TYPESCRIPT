import { useState, createContext } from "react";
import { BlogManagementWrapper, CustomInput } from "./styles";
import Button from "components/Button/Button";

import Card from "homeworks/Homework_13/components/Card/Card";
import type { PostsContext } from "./types";

export const MainContext = createContext<PostsContext>({
  posts: [],
  setPosts: () => {},
});

function BlogManagement() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState<string[]>([]);

  const getUserData = () => {
    if (text.trim() === "") {
      alert("Field is empty");
      return;
    }

    console.log(text);
    setPosts((prev) => [...prev, text]);

    setText("");
  };
  console.log(posts);
  return (
    <MainContext.Provider value={{ posts, setPosts }}>
      <BlogManagementWrapper>
        <CustomInput
          id="text"
          name="textarea"
          type="text"
          placeholder="Enter text for new post"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button name="Запостить" onClick={getUserData} />
        <Card />
      </BlogManagementWrapper>
    </MainContext.Provider>
  );
}

export default BlogManagement;
