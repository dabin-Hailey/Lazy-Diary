import { useEffect, useRef, useState } from "react";
import { emojiTitle, photoWrapper } from "../../styles";

interface PhotoProps {
  photoURL: string | undefined;
  setImgFile: (imgFile: File) => void;
}

const UpdatePhoto: React.FC<PhotoProps> = ({ photoURL, setImgFile }) => {
  const [imgPath, setImgPath] = useState<string | undefined>(photoURL);

  const imgRef = useRef<HTMLInputElement>(null);
  const MAX_IMAGE_SIZE_BYTES = 1024 * 1024 * 2;

  const previewImage = () => {
    if (imgRef.current && imgRef.current.files) {
      const img = imgRef.current.files[0];

      if (img.size > MAX_IMAGE_SIZE_BYTES) {
        alert("최대 2MB까지 업로드 가능합니다.");
        return;
      }
      setImgFile(img);

      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        setImgPath(reader.result as string);
      };
    }
  };

  return (
    <div css={photoWrapper}>
      <div css={emojiTitle}>오늘의 사진</div>
      <label htmlFor="photo">
        <img
          src={imgPath ? imgPath : `/images/upload.png`}
          alt="이미지 미리보기"
        />
      </label>
      <input
        type="file"
        id="photo"
        name="photo"
        accept=".png, .jpeg, .jpg"
        onChange={previewImage}
        ref={imgRef}
      />
    </div>
  );
};

export default UpdatePhoto;
