import {
  BtnWrapper,
  CreateHeaderWrapper,
  defaultBtn,
  reverseBtn
} from "../../styles";

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
  const handleReset = () => {
    window.location.href = "/list";
  };

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

export default UpdateHeader;
