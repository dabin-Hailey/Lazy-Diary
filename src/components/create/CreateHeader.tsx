import React from "react";
import {
  BtnWrapper,
  CreateHeaderWrapper,
  defaultBtn,
  reverseBtn
} from "../../styles";

interface HeaderProps {
  handleChange: (e: React.ChangeEvent) => void;
  titleInputRef: React.RefObject<HTMLInputElement>;
}

const CreateHeader: React.FC<HeaderProps> = ({
  handleChange,
  titleInputRef
}) => {
  const handleReset = () => {
    window.location.href = "/list";
  };

  return (
    <div css={CreateHeaderWrapper}>
      <input
        type="text"
        placeholder="제목을 입력하세요."
        id="title"
        name="title"
        onChange={handleChange}
        ref={titleInputRef}
      />
      <div css={BtnWrapper}>
        <button
          type="reset"
          css={defaultBtn}
          onClick={handleReset}
        >
          Home
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

export default CreateHeader;
