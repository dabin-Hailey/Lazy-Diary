import React from "react";
import { DiaryInputs } from "../../@types/types";
import {
  itemBtnWrapper,
  itemDate,
  itemImgWrapper,
  itemText,
  itemTitle,
  itemTitleWrapper,
  itemWrapper
} from "../../styles";
import { useNavigate } from "react-router-dom";

interface ItemProps extends DiaryInputs {
  handleDelete: (userId: string, id: string) => void;
}

const Item: React.FC<ItemProps> = ({
  id,
  title,
  year,
  month,
  date,
  day,
  feeling,
  weather,
  meeting,
  activity,
  post,
  handleDelete
}) => {
  const navigate = useNavigate();
  const handleUpdate = (id: string) => {
    navigate(`/update/${id}`);
  };
  const currentUser = JSON.parse(localStorage.getItem("userData") || "{}");

  return (
    <div css={itemWrapper}>
      <div css={itemTitleWrapper}>
        <p css={itemTitle}>{title}</p>
        <p css={itemDate}>
          최근 수정일: {year}.{month}.{date}({day})
        </p>
      </div>
      {post && <p css={itemText}>{post}</p>}
      <div css={itemTitleWrapper}>
        <div css={itemImgWrapper}>
          <img src={"/images/" + feeling + ".png"} />
          <img src={"/images/" + weather + ".png"} />
          <img src={"/images/" + meeting + ".png"} />
          <img src={"/images/" + activity + ".png"} />
        </div>
        <div css={itemBtnWrapper}>
          <button onClick={() => handleUpdate(id)}>수정</button>
          <button onClick={() => handleDelete(currentUser.id, id)}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
