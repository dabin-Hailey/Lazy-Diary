import { emojiTitle, postWrapper } from "../../styles";

const EditPost: React.FC = () => {
  return (
    <div css={postWrapper}>
      <div css={emojiTitle}>한 줄 일기</div>
      <textarea placeholder="한 줄로 하루를 기록해보세요."></textarea>
    </div>
  );
};

export default EditPost;
