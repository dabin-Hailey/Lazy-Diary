import React from "react";
import { DiaryInputs } from "../../@types/types";
import {
  itemDate,
  itemImgWrapper,
  itemText,
  itemTitle,
  itemTitleWrapper,
  itemWrapper
} from "../../styles";

const Item: React.FC<DiaryInputs> = ({
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
  post
}) => {
  return (
    <div css={itemWrapper}>
      <div css={itemTitleWrapper}>
        <p css={itemTitle}>{title}</p>
        <p css={itemDate}>
          최근 수정일: {year}.{month}.{date}({day})
        </p>
      </div>
      {post && <p css={itemText}>{post}</p>}
      <div css={itemImgWrapper}>
        <img src={"/images/" + feeling + ".png"} />
        <img src={"/images/" + weather + ".png"} />
        <img src={"/images/" + meeting + ".png"} />
        <img src={"/images/" + activity + ".png"} />
      </div>
    </div>
  );
};

export default Item;
