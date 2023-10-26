import React, { useEffect, useState } from "react";
import { DiaryInputs, UserData } from "../@types/types";
import ListNav from "../components/list/ListNav";
import Item from "../components/list/Item";
import { getData } from "../utils/utils";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors, itemWrapper } from "../styles";

const ListPage: React.FC = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const [diaryList, setDiaryList] = useState<DiaryInputs[]>([]);
  const currentUser: UserData = JSON.parse(
    localStorage.getItem("userData") || "{}"
  );

  const handleModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

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

  //일기 목록이 있을 때는 목록 출력
  if (diaryList.length > 0) {
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
              handleModal={handleModal}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div css={ListWrapper}>
        <ListNav />
        <div css={itemWrapper}>
          <p css={noList}>첫 일기를 기록해보세요!</p>
        </div>
      </div>
    );
  }
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

const noList = css`
  font-size: 3rem;
  color: ${colors.secondaryColor};
`;
