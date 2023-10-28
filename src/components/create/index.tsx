import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateWrapper } from "../../styles";
import { DiaryInputs } from "../../@types/types";
import { addImage, setData } from "../../utils/utils";
import Swal from "sweetalert2";
import CreateHeader from "./CreateHeader";
import CreateEmoji from "./CreateEmoji";
import CreatePost from "./CreatePost";
import CreatePhoto from "./CreatePhoto";
import FormButtons from "../common/FormButtons";
import NotFound from "../common/NotFound";

const Create = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("userData") || "{}");
  const titleInputRef = useRef<HTMLInputElement>(null);
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

  const [isScrolling, setIsScrolling] = useState(false);

  const handleScrolling = () => {
    if (window.scrollY > 100) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  //text로 입력하는 항목 저장 (title, post)
  const handleChange = (e: React.ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // const form = e.target as HTMLFormElement;
    const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
    const dateNow = String(Date.now());
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
      const imageURL = await addImage(imgFile);
      await setData(currentUser.id, {
        ...inputs,
        id: dateNow,
        year,
        month,
        date,
        day,
        photoURL: imageURL
      });
    } else {
      await setData(currentUser.id, {
        ...inputs,
        id: dateNow,
        year,
        month,
        date,
        day
      });
    }
    navigate("/list");
  };

  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);

    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  if (currentUser) {
    return (
      <form
        css={CreateWrapper}
        onSubmit={handleSubmit}
      >
        <CreateHeader
          handleChange={handleChange}
          titleInputRef={titleInputRef}
        />
        <CreateEmoji handleChange={handleChange} />
        <CreatePost handleChange={handleChange} />
        <CreatePhoto
          imgPath={imgPath}
          setImgPath={setImgPath}
          setImgFile={setImgFile}
        />
        {isScrolling ? <FormButtons /> : null}
      </form>
    );
  } else {
    <NotFound />;
  }
};

export default Create;
