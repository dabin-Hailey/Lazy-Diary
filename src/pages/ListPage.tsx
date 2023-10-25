import React, { useEffect, useState } from "react";
import ListNav from "../components/list/ListNav";
import Item from "../components/list/Item";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles";
import { getData } from "../utils/utils";
import { DiaryInputs, UserData } from "../@types/types";

const ListPage: React.FC = () => {
  const currentUser: UserData = JSON.parse(
    localStorage.getItem("userData") || "{}"
  );

  const [diaryList, setDiaryList] = useState<DiaryInputs[]>([]);

  const fetchData = async () => {
    if (currentUser.id) {
      const userId = `user-${currentUser.id}`;
      const response = await getData(userId);
      setDiaryList(response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div css={ListWrapper}>
      <ListNav />
      {diaryList.map((item) => {
        const {
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
        } = item as DiaryInputs;
        return (
          <Item
            key={id}
            id={id}
            title={title}
            year={year}
            month={month}
            date={date}
            day={day}
            feeling={feeling}
            weather={weather}
            meeting={meeting}
            activity={activity}
            post={post}
          />
        );
      })}
    </div>
  );
};

export default ListPage;

const ListWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background-color: ${colors.bgColor};

  margin: 5rem auto;
`;
