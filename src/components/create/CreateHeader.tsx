import {
  BtnWrapper,
  CreateHeaderWrapper,
  defaultBtn,
  reverseBtn
} from "../../styles";

interface Props {
  handleChange: (e: React.ChangeEvent) => void;
}

const CreateHeader: React.FC<Props> = ({ handleChange }) => {
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
        required
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
