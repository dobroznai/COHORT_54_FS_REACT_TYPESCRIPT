import { useContext } from "react";
import { BlogManagementContext } from "homeworks/Homework_13/components/BlogManagement/BlogManagement";
import { v4 } from "uuid";
import { MessageWrapper, ContentInfo, DeleteButtonWrapper } from "./styles";

function Message() {
  const { posts, setPosts } = useContext(BlogManagementContext);

  const deletePosts = () => {
    if (window.confirm("Are you sure you want to delete all posts?")) {
      setPosts([]);
    }
  };

  return (
    <>
      {posts.map((post) => (
        <MessageWrapper key={v4()}>
          <ContentInfo>{post}</ContentInfo>
        </MessageWrapper>
      ))}
      {posts.length > 0 && (
        <DeleteButtonWrapper $isRed onClick={deletePosts}>
          Delete all posts
        </DeleteButtonWrapper>
      )}
    </>
  );
}

export default Message;
