/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors, defaultBtn, reverseBtn } from "../../styles";

const EditHeader: React.FC = () => {
  return (
    <div css={EditHeaderWrapper}>
      <input
        type="text"
        placeholder="제목을 입력하세요."
        required
        css={TitleBox}
      ></input>
      <div css={BtnWrapper}>
        <button
          type="reset"
          css={defaultBtn}
        >
          취소
        </button>
        <button
          type="submit"
          css={reverseBtn}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default EditHeader;

const EditHeaderWrapper = css`
  width: 100%;
  height: 5.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleBox = css`
  width: 70%;
  height: 100%;

  padding: 0 2rem;

  font-size: 2.3rem;
  font-weight: bold;
  color: ${colors.secondaryColor};

  background-color: ${colors.secondBGColor};
  outline: none;
  border: none;
  border-radius: 1rem;

  ::placeholder {
    font-style: italic;
    font-size: 2rem;
    color: #8e8e8e;
    font-weight: normal;
  }

  :focus {
    border: none;
    outline: 1px solid ${colors.secondaryColor};
    box-shadow: 0 0 0.7rem ${colors.secondaryColor};
  }
`;

const BtnWrapper = css`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  button {
    width: 50%;
    height: 100%;
  }
`;
