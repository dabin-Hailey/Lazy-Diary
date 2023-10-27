import { useEffect, useState } from "react";
import {
  currentUser,
  addImage,
  getDataByField,
  updateData
} from "../utils/utils";
import { DiaryInputs, UpdateInputs } from "../@types/types";
import UpdateEmoji from "../components/update/UpdateEmoji";
import UpdatePost from "../components/update/UpdatePost";
import UpdatePhoto from "../components/update/UpdatePhoto";
import UpdateHeader from "../components/update/UpdateHeader";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePage: React.FC = () => {
  const params = useParams();
  const docId = params.id;
  const navigate = useNavigate();

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

  const { id, title, feeling, weather, meeting, activity, post, photoURL } =
    inputs as UpdateInputs;

  const [imgFile, setImgFile] = useState<File>();

  //text로 입력하는 항목 저장 (title, post)
  const handleChange = (e: React.ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
    const now = new Date();
    const year = now.getFullYear(); // 년도
    const month = now.getMonth() + 1; // 월
    const date = now.getDate(); // 날짜
    const day = WEEKDAY[now.getDay()]; // 요일

    if (imgFile) {
      const imageURL = await addImage(imgFile as File);
      await updateData(currentUser.id, id, {
        ...inputs,
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
    } else {
      await updateData(currentUser.id, id, {
        ...inputs,
        year,
        month,
        date,
        day,
        feeling: form.feeling.value,
        weather: form.weather.value,
        meeting: form.meeting.value,
        activity: form.activity.value
      });
    }
    navigate("/list");
  };

  const fetchData = async () => {
    if (currentUser.id && docId) {
      const userId = `user-${currentUser.id}`;
      const response = await getDataByField(userId, docId);
      if (response) {
        setInputs(response);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form
      css={UpdateWrapper}
      onSubmit={handleSubmit}
    >
      <UpdateHeader
        title={title}
        handleChange={handleChange}
      />
      <UpdateEmoji
        feeling={feeling}
        weather={weather}
        meeting={meeting}
        activity={activity}
      />
      <UpdatePost
        post={post}
        handleChange={handleChange}
      />
      <UpdatePhoto
        photoURL={photoURL}
        setImgFile={setImgFile}
      />
    </form>
  );
};

export default UpdatePage;

const UpdateWrapper = css`
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  background-color: ${colors.bgColor};

  margin: 5rem auto;
`;
