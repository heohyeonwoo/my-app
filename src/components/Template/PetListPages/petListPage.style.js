import styled from "styled-components";

export const mainMessage = styled.div`
  grid-area: GS;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const mainMessageTitle = styled.p`
  font-size: 28px;
  font-weight: 600;
`;

export const mainPageFormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const TextDateDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const mainPageInputDate = styled.div`
  width: 100%;
  border: none;

  .react-datepicker-wrapper {
    border: none;

    input {
      border: none;
      font-size: 16px;
    }
  }
`;

export const mainPagetextarea = styled.textarea`
  width: 100%;
  height: 200px;

  border-color: #e0e0e0;
`;

export const mainPageFormButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 18px;
  color: white;
  font-weight: 600;
  background: #bcaaa4;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;
