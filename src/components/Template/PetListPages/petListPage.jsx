import React from "react";
import { ko } from "date-fns/locale";
import DatePicker from "react-datepicker";
import * as S from "./petListPage.style";

const PetListPage = ({
  handleDeleteMessage,
  handleMessageChange,
  handleMessageSubmit,
  handleMessageKeyPress,
  handleToggleComplete,
  setStartDate,
  startDate,
  message,
  messages,
  completedMessages,
}) => {
  return (
    <S.mainMessage>
      <S.mainMessageTitle> PET LIST 메모장 </S.mainMessageTitle>
      <S.mainPageFormWrapper onSubmit={handleMessageSubmit}>
        <S.TextDateDiv>
          <S.mainPageInputDate>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              locale={ko}
              dateFormat="yyyy.MM.dd (eee)"
              showPopperArrow={false}
              minDate={new Date()}
            />
          </S.mainPageInputDate>
          <S.mainPagetextarea
            placeholder="메모..."
            value={message}
            onChange={handleMessageChange}
            onKeyPress={handleMessageKeyPress}
          />
        </S.TextDateDiv>
        <S.mainPageFormButton type="submit">저장하기</S.mainPageFormButton>
      </S.mainPageFormWrapper>

      <div>
        <h3>메모장</h3>
        <ul>
          {messages.map((m, index) => (
            <li key={index}>
              <div>
                <input
                  type="checkbox"
                  checked={m.completed}
                  onChange={() => handleToggleComplete(index)}
                />
                <span
                  style={{
                    textDecoration: m.completed ? "line-through" : "none",
                  }}
                >
                  {m.text} - {m.date.toLocaleDateString()}
                </span>
              </div>
              {!m.completed && (
                <button onClick={() => handleDeleteMessage(index)}>삭제</button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>완료된 메모</h3>
        <ul>
          {completedMessages.map((m, index) => (
            <li key={index}>
              <div>
                <input
                  type="checkbox"
                  checked={m.completed}
                  onChange={() => handleToggleComplete(index)}
                />
                <span
                  style={{
                    textDecoration: "line-through",
                  }}
                >
                  {m.text} - {m.date.toLocaleDateString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </S.mainMessage>
  );
};

export default PetListPage;
