import { useState } from "react";
import { setData } from "../utils/utils";
import { DiaryInputs, UserData } from "../@types/types";
import EditEmoji from "../components/edit/EditEmoji";
import EditPost from "../components/edit/EditPost";
import EditPhoto from "../components/edit/EditPhoto";
import EditHeader from "../components/edit/EditHeader";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles";
import { useNavigate } from "react-router-dom";

const EditPage: React.FC = () => {
  const navigate = useNavigate();

  const currentUser: UserData = JSON.parse(
    localStorage.getItem("userData") || "{}"
  );

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
    photoName: "",
    photoURL: ""
  });

  const handleChange = (e: React.ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const imageURL = addImage();

    const form = e.target as HTMLFormElement;

    const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
    const dateNow = String(new Date().getTime());
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
      activity: form.activity.value
    });
    navigate("/list");
  };

  return (
    <form
      css={EditWrapper}
      onSubmit={handleSubmit}
    >
      <EditHeader handleChange={handleChange} />
      <EditEmoji />
      <EditPost handleChange={handleChange} />
      <EditPhoto
        imgPath={imgPath}
        setImgPath={setImgPath}
      />
    </form>
  );
};

export default EditPage;

const EditWrapper = css`
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  background-color: ${colors.bgColor};

  margin: 5rem auto;
`;
