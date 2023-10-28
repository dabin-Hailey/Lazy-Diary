import React from "react";
import { BtnWrapper, defaultBtn, reverseBtn } from "../../styles";

const FormButtons: React.FC = () => {
  const handleReset = () => {
    window.location.href = "/list";
  };

  return (
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
  );
};

export default FormButtons;
