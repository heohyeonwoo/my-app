import React, { useState } from "react";
import * as S from "./mainPage.style";
import { useNavigate } from "react-router-dom";
import PetListPage from "../PetListPages/petListPage";

const MainPage = ({
  message,
  setMessage,
  messages,
  setMessages,
  startDate,
  setStartDate,
}) => {
  const [completedMessages, setCompletedMessages] = useState([]);
  const navigate = useNavigate();

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleDeleteMessage = (indexToDelete) => {
    const updatedMessages = [...messages];
    if (updatedMessages[indexToDelete].completed) {
      setCompletedMessages(
        completedMessages.filter(
          (message) => message !== updatedMessages[indexToDelete]
        )
      );
    }
    updatedMessages.splice(indexToDelete, 1);
    setMessages(updatedMessages);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (message !== "") {
      setMessages([
        ...messages,
        { text: message, date: startDate, completed: false },
      ]);
      setMessage("");
    }
  };

  const handleMessageKeyPress = (event) => {
    if (event.key === "Enter") {
      handleMessageSubmit(event);
    }
  };

  const handleToggleComplete = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].completed = !updatedMessages[index].completed;
    setMessages(updatedMessages);

    if (updatedMessages[index].completed) {
      setCompletedMessages([...completedMessages, updatedMessages[index]]);
    } else {
      setCompletedMessages(
        completedMessages.filter(
          (message) => message !== updatedMessages[index]
        )
      );
    }
  };

  return (
    <S.MainPageWrapper>
      <S.pageHeader>
        <S.pageHeaderTitle>
          어서오세요! 반려 동물 편의 지도 앱에 오신 것을 환영합니다.
        </S.pageHeaderTitle>
      </S.pageHeader>
      <S.Mainimg>
        <S.Linkimg onClick={(e) => navigate("/kakao")} />
      </S.Mainimg>
      <PetListPage
        handleMessageChange={handleMessageChange}
        handleDeleteMessage={handleDeleteMessage}
        handleMessageSubmit={handleMessageSubmit}
        handleMessageKeyPress={handleMessageKeyPress}
        handleToggleComplete={handleToggleComplete}
        startDate={startDate}
        setStartDate={setStartDate}
        message={message}
        messages={messages}
        completedMessages={completedMessages}
      />
    </S.MainPageWrapper>
  );
};

export default MainPage;
