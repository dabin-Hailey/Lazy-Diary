import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryInputs, UpdateInputs } from "../../@types/types";
import { CreateWrapper } from "../../styles";
import {
  currentUser,
  addImage,
  getDataByField,
  updateData
} from "../../utils/utils";
import Swal from "sweetalert2";
import UpdateHeader from "./UpdateHeader";
import UpdateEmoji from "./UpdateEmoji";
import UpdatePost from "./UpdatePost";
import UpdatePhoto from "./UpdatePhoto";

const Update: React.FC = () => {
  const params = useParams();
  const docId = params.id;
  const navigate = useNavigate();

  const titleInputRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<File>();
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

  //text로 입력하는 항목 저장 (title, post)
  const handleChange = (e: React.ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
    const now = new Date();
    const year = now.getFullYear(); // 년도
    const month = now.getMonth() + 1; // 월
    const date = now.getDate(); // 날짜
    const day = WEEKDAY[now.getDay()]; // 요일

    if (titleInputRef.current?.value === "") {
      Swal.fire({
        title: "제목이 비었어요.. 🥲",
        text: "좋은 말로 할 때 제목을 입력하세요 💬",
        icon: "error",
        confirmButtonText: "확인"
      });
      titleInputRef.current?.focus();
      return;
    }

    if (inputs.feeling === "") {
      Swal.fire({
        title: "감정이 비었어요.. 🥲",
        text: "어떤 하루였는지 알려주세요 🩷",
        icon: "error",
        confirmButtonText: "확인"
      });
      return;
    }

    if (inputs.weather === "") {
      Swal.fire({
        title: "날씨가 비었어요.. 🥲",
        text: "날씨가 어땠는지 알려주세요 🩷",
        icon: "error",
        confirmButtonText: "확인"
      });
      return;
    }

    if (inputs.meeting === "") {
      Swal.fire({
        title: "인연이 비었어요.. 🥲",
        text: "누구를 만났는지 알려주세요 🩷",
        icon: "error",
        confirmButtonText: "확인"
      });
      return;
    }

    if (inputs.activity === "") {
      Swal.fire({
        title: "활동이 비었어요.. 🥲",
        text: "무엇을 했는지 알려주세요 🩷",
        icon: "error",
        confirmButtonText: "확인"
      });
      return;
    }

    if (imgFile) {
      const imageURL = await addImage(imgFile as File);
      await updateData(currentUser.id, id, {
        ...inputs,
        year,
        month,
        date,
        day,
        photoURL: imageURL
      });
    } else {
      await updateData(currentUser.id, id, {
        ...inputs,
        year,
        month,
        date,
        day
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
      css={CreateWrapper}
      onSubmit={handleSubmit}
    >
      <UpdateHeader
        title={title}
        handleChange={handleChange}
        titleInputRef={titleInputRef}
      />
      <UpdateEmoji
        handleChange={handleChange}
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

export default Update;
