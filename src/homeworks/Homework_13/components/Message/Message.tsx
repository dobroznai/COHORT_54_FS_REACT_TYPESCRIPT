import { useContext } from "react";
import { MainContext } from "homeworks/Homework_13/components/BlogManagement/BlogManagement";
import { v4 } from "uuid";
import { MessageWrapper, ContentInfo } from "./styles";
import Button from "components/Button/Button";

function Message() {
  const { posts, setPosts } = useContext(MainContext);

  const deletePosts = () => {
    setPosts([]);
  };

  return (
    <>
      {posts.map((post) => (
        <MessageWrapper key={v4()}>
          <ContentInfo>{post}</ContentInfo>
        </MessageWrapper>
      ))}
      <Button name="Delete all posts" isRed onClick={deletePosts} />
    </>
  );
}

export default Message;
