/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useState } from "react";
import { emojiTitle, photoWrapper } from "../../styles";

interface OwnProps {
  imgPath: string;
  setImgPath: (file: string) => void;
}

const EditPhoto: React.FC<OwnProps> = ({ imgPath, setImgPath }) => {
  const [imgFile, setImgFile] = useState<File>();
  const imgRef = useRef<HTMLInputElement>(null);
  const MAX_IMAGE_SIZE_BYTES = 1024 * 1024 * 2;

  const previewImage = () => {
    if (imgRef.current && imgRef.current.files) {
      const file = imgRef.current.files[0];

      if (file.size > MAX_IMAGE_SIZE_BYTES) {
        alert("최대 2MB까지 업로드 가능합니다.");
        return;
      }
      setImgFile(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgPath(reader.result as string);
      };
    }
  };

  return (
    <div css={photoWrapper}>
      <div css={emojiTitle}>오늘의 사진</div>
      <label css={ImageLabel}>
        <input
          type="file"
          id="photo"
          name="photo"
          accept=".png, .jpeg, .jpg"
          onChange={previewImage}
          ref={imgRef}
        />
      </label>
    </div>
  );
};

export default EditPhoto;

const ImageLabel = css`
  width: 400px;
  height: 400px;

  background: url(imgPath) center/cover;
  // background: url(images/upload.png) center/cover;
  cursor: pointer;
`;
