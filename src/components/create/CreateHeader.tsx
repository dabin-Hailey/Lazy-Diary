import React from "react";
import { CreateHeaderWrapper } from "../../styles";
import FormButtons from "../common/FormButtons";

interface HeaderProps {
  handleChange: (e: React.ChangeEvent) => void;
  titleInputRef: React.RefObject<HTMLInputElement>;
}

const CreateHeader: React.FC<HeaderProps> = ({
  handleChange,
  titleInputRef
}) => {
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
      <FormButtons />
    </div>
  );
};

export default CreateHeader;
