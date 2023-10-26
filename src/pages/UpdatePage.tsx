import { useState } from "react";
import { addImage, setData } from "../utils/utils";
import { DiaryInputs, UserData } from "../@types/types";
import CreateEmoji from "../components/create/CreateEmoji";
import CreatePost from "../components/create/CreatePost";
import CreatePhoto from "../components/create/CreatePhoto";
import CreateHeader from "../components/create/CreateHeader";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles";
import { useNavigate } from "react-router-dom";

const CreatePage: React.FC = () => {
  const navigate = useNavigate();

  const currentUser: UserData = JSON.parse(
    localStorage.getItem("userData") || "{}"
  );

  const [imgFile, setImgFile] = useState<File>();
  const [imgPath, setImgPath] = useState("");
  const [inputs, setInputs] = useState<DiaryInputs>({
    id: "",
    title: "",
    year: 0,
    month: 0,
    date: 0,
    day: "",
    feeling: "",
    weather: "",
    meeting: "",
    activity: "",
    post: "",
    photoURL: ""
  });

  //text로 입력하는 항목 저장 (title, post)
  const handleChange = (e: React.ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (imgFile) {
      const imageURL = await addImage(imgFile);
      const form = e.target as HTMLFormElement;

      const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
      const dateNow = String(Date.now());
      const now = new Date();
      const year = now.getFullYear(); // 년도
      const month = now.getMonth() + 1; // 월
      const date = now.getDate(); // 날짜
      const day = WEEKDAY[now.getDay()]; // 요일

      await setData(currentUser.id, {
        ...inputs,
        id: dateNow,
        year,
        month,
        date,
        day,
        feeling: form.feeling.value,
        weather: form.weather.value,
        meeting: form.meeting.value,
        activity: form.activity.value,
        photoURL: imageURL
      });
      navigate("/list");
    }
  };

  console.log(imgFile);
  return (
    <form
      css={CreateWrapper}
      onSubmit={handleSubmit}
    >
      <CreateHeader handleChange={handleChange} />
      <CreateEmoji />
      <CreatePost handleChange={handleChange} />
      <CreatePhoto
        imgPath={imgPath}
        setImgPath={setImgPath}
        setImgFile={setImgFile}
      />
    </form>
  );
};

export default CreatePage;

const CreateWrapper = css`
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  background-color: ${colors.bgColor};

  margin: 5rem auto;
`;
