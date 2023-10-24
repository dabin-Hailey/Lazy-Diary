import { emojiTitle, photoWrapper } from "../../styles";

const EditPicture: React.FC = () => {
  return (
    <div css={photoWrapper}>
      <div css={emojiTitle}>오늘의 사진</div>
      <input type="file"></input>
      <img src="/images/upload.png" />
    </div>
  );
};

export default EditPicture;
