/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors, emojiTitle } from "../../styles";

const EditPost: React.FC = () => {
  return (
    <div css={postWrapper}>
      <div css={emojiTitle}>한 줄 일기</div>
      <textarea placeholder="한 줄로 하루를 기록해보세요."></textarea>
    </div>
  );
};

export default EditPost;

const postWrapper = css`
  width: 100%;

  box-sizing: border-box;
  border: none;
  border-radius: 1rem;
  background-color: ${colors.secondBGColor};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  textarea {
    resize: none;
    width: 85%;
    height: 10rem;

    margin-bottom: 2rem;
    padding: 1rem;
    box-sizing: border-box;

    font-size: 1.8rem;
    font-weight: normal;
    color: ${colors.primaryColor};

    background-color: transparent;
    // outline: 1px solid ${colors.secondaryColor};
    border: none;

    ::placeholder {
      font-style: italic;
      font-size: 1.6rem;
      color: #8e8e8e;
      font-weight: normal;
      text-align: start;
    }

    :focus {
      border: none;
      outline: 1px solid ${colors.secondaryColor};
      box-shadow: 0 0 0.7rem ${colors.secondaryColor};
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
