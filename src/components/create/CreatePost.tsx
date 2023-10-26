import { emojiTitle, postWrapper } from "../../styles";

interface Props {
  handleChange: (e: React.ChangeEvent) => void;
}

const CreatePost: React.FC<Props> = ({ handleChange }) => {
  return (
    <div css={postWrapper}>
      <div css={emojiTitle}>한 줄 일기</div>
      <textarea
        placeholder="한 줄로 하루를 기록해보세요."
        name="post"
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default CreatePost;
