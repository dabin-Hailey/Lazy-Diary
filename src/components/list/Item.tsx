import React from "react";
import { ListItems } from "../../@types/types";
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

const Item: React.FC<ListItems> = ({
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
  handleModal
}) => {
  const navigate = useNavigate();
  const handleUpdate = (id: string) => {
    navigate(`/update/${id}`);
  };

  return (
    <div
      css={itemWrapper}
      onClick={handleModal}
    >
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
          <button
          // onClick={handleModal}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
