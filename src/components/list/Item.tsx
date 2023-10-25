import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../styles";
import { DiaryInputs } from "../../@types/types";

const Item: React.FC<DiaryInputs> = ({
  id,
  title,
  date,
  feeling,
  weather,
  meeting,
  activity
}) => {
  return (
    <div css={itemWrapper}>
      <div css={itemTitleWrapper}>
        <p css={itemTitle}>{title}</p>
        <p css={itemDate}>최근 수정일: {date}</p>
      </div>
      <div css={itemImgWrapper}>
        <img src={feeling} />
        <img src={weather} />
        <img src={meeting} />
        <img src={activity} />
      </div>
    </div>
  );
};

export default Item;

const itemWrapper = css`
  width: 100%;
  padding: 1rem 3rem;

  box-sizing: border-box;
  border: none;
  border-radius: 1rem;

  background-color: ${colors.secondBGColor};

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

const itemTitleWrapper = css`
  width: 100%;
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const itemTitle = css`
  font-size: 2.3rem;
  font-weight: bold;
  color: ${colors.secondaryColor};
`;

const itemDate = css`
  font-size: 1.8rem;
  font-weight: normal;
  color: ${colors.primaryColor};
`;

const itemImgWrapper = css`
  width: 100%;
  margin: 1rem auto;

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
