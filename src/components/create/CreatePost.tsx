import { emojiTitle, postWrapper } from "../../styles";

interface PostProps {
  handleChange: (e: React.ChangeEvent) => void;
}

const CreatePost: React.FC<PostProps> = ({ handleChange }) => {
  return (
    <div css={postWrapper}>
      <div css={emojiTitle}>한 줄 일기</div>
      <textarea
        placeholder="한 줄로 하루를 기록해보세요."
        name="post"
        onChange={handleChange}
      />
    </div>
  );
};

export default CreatePost;
