import styled from "styled-components";
import myImage from "../../../style/img/brown_dog.png";
import buttonImage from "../../../style/icons/dog.png";

export const MainPageWrapper = styled.div`
  overflow: auto;
  display: grid;
  grid-template-areas:
    "GH GH GS"
    "GM GM GS";
  grid-template-rows: repeat(auto-fill, minmax(5%, auto));
  gap: 30px;
  padding: 12px;
`;

export const pageHeader = styled.div`
  width: 100%;
  height: 30%;
  grid-area: GH;
  display: flex;
  flex-direction: row;
`;

export const pageHeaderTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
`;

export const pageHeaderright = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
`;

export const Mainimg = styled.div`
  width: 100%;
  height: 100vh;
  grid-area: GM;
  background-image: url(${myImage});
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
`;

export const Linkimg = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  background: none;
  position: absolute;
  background-image: url(${buttonImage});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const mainMessage = styled.div`
  width: 100%;
  grid-area: GS;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const mainPageFormWrapper = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  gap: 20px;
`;

export const TextDateDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const mainPageInputDate = styled.div`
  width: 100%;
  border: none;

  .react-datepicker-wrapper {
    border: none;

    input {
      border: none;
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

export const mainMessageTitle = styled.h2`
  font-size: 28px;
`;
