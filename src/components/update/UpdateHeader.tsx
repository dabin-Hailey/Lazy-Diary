import { CreateHeaderWrapper } from "../../styles";
import FormButtons from "../common/FormButtons";

interface HeaderProps {
  title: string;
  handleChange: (e: React.ChangeEvent) => void;
  titleInputRef: React.RefObject<HTMLInputElement>;
}

const UpdateHeader: React.FC<HeaderProps> = ({
  title,
  handleChange,
  titleInputRef
}) => {
  return (
    <div css={CreateHeaderWrapper}>
      <input
        type="text"
        placeholder="제목을 입력하세요."
        name="title"
        onChange={handleChange}
        defaultValue={title}
        ref={titleInputRef}
      />
      <FormButtons />
    </div>
  );
};

export default UpdateHeader;
