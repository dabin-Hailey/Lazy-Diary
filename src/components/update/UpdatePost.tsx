import { emojiTitle, postWrapper } from "../../styles";

interface PostProps {
  post?: string;
  handleChange: (e: React.ChangeEvent) => void;
}

const UpdatePost: React.FC<PostProps> = ({ post, handleChange }) => {
  return (
    <div css={postWrapper}>
      <div css={emojiTitle}>한 줄 일기</div>
      <textarea
        placeholder="한 줄로 하루를 기록해보세요."
        name="post"
        onChange={handleChange}
        defaultValue={post}
      ></textarea>
    </div>
  );
};

export default UpdatePost;
