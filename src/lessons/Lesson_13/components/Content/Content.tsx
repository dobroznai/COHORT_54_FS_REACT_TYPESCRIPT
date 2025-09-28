// ШАГ 4: Импортируем useContext хук из библиотеки react
import { useContext } from "react";

import Button from "components/Button/Button";
import { MainContext } from "lessons/Lesson_13/components/Main/Main";

import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";

function Content() {
  // ШАГ 5: Получить доступ к данным хранящимся в контексте
  const { userData, setUserData } = useContext(MainContext);
  console.log(userData);

  const deleteUserData = () => {
    // тут пишем логику по удалению данных из state, который храниться в Main
    setUserData(undefined);
  };

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      {/* <ContentInfo>
        Fullname: {userData === undefined ? "" : userData.fullName}
      </ContentInfo> */}
      <ContentInfo>Fullname: {userData?.fullName}</ContentInfo>
      <ContentInfo>Age: {userData?.age}</ContentInfo>
      <ContentInfo>Job: {userData?.jobPosition}</ContentInfo>
      <Button name="Delete user data" isRed onClick={deleteUserData} />
    </ContentWrapper>
  );
}

export default Content;
