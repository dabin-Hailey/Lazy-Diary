import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../styles";
import { DiaryInputs } from "../../@types/types";

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

const itemWrapper = css`
  width: 100%;
  padding: 2rem 3rem;

  box-sizing: border-box;
  border: none;
  border-radius: 1rem;

  background-color: ${colors.secondBGColor};

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
`;

const itemTitleWrapper = css`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const itemTitle = css`
  font-size: 2.3rem;
  font-weight: bold;
  color: ${colors.secondaryColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
`;

const itemDate = css`
  font-size: 1.8rem;
  font-weight: normal;
  color: ${colors.primaryColor};
  white-space: nowrap;

  margin: 0;
`;

const itemText = css`
  width: 100%;
  font-size: 1.8rem;
  font-weight: normal;
  color: ${colors.primaryColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
`;

const itemImgWrapper = css`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  img {
    width: 5rem;
    height: 5rem;
  }
`;
