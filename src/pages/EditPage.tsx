import { useRef, useState } from "react";
import { addImage, setData } from "../utils/utils";
import { DiaryInputs, UserData } from "../@types/types";
import EditEmoji from "../components/edit/EditEmoji";
import EditPost from "../components/edit/EditPost";
import EditPhoto from "../components/edit/EditPhoto";
import EditHeader from "../components/edit/EditHeader";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles";

const EditPage: React.FC = () => {
  const currentUser: UserData = JSON.parse(
    localStorage.getItem("userData") || "{}"
  );

  const [imgPath, setImgPath] = useState("");
  const [inputs, setInputs] = useState<DiaryInputs>({
    title: "",
    date: 0,
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
    console.log(inputs);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const date = Date.now();
    // const imageURL = addImage();

    console.log(e);
    setInputs({
      ...inputs,
      date,
      feeling: form.feeling.value,
      weather: form.weather.value,
      meeting: form.meeting.value,
      activity: form.activity.value
    });

    setData(currentUser.id, inputs);
    console.log(inputs);
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
