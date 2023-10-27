import React, { useEffect, useState } from "react";
import { DiaryInputs } from "../@types/types";
import ListNav from "../components/list/ListNav";
import Item from "../components/list/Item";
import { currentUser, deleteData, getData } from "../utils/utils";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors, itemWrapper } from "../styles";
import Swal from "sweetalert2";

const ListPage: React.FC = () => {
  const [list, setList] = useState<DiaryInputs[]>([]);

  const handleDelete = async (userId: string, id: string) => {
    const result = await Swal.fire({
      title: "정말 삭제하시겠습니까?",
      text: "삭제한 후에는 복구가 불가능합니다 🥲",
      icon: "warning",
      showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
      reverseButtons: true // 버튼 순서 거꾸로
    });

    if (result.isConfirmed) {
      const newList = list.filter((item) => {
        return item.id !== id;
      });
      setList(newList);

      await deleteData(userId, id);
      Swal.fire("삭제가 완료되었습니다.", "화끈하시네요~!", "success");
    } else if (result.isDismissed) {
      Swal.fire(
        "삭제를 취소하셨습니다.",
        "좋은 결정이라고 생각해요🩷",
        "success"
      );
    }
  };

  const fetchData = async () => {
    if (currentUser.id) {
      const userId = `user-${currentUser.id}`;
      const response = await getData(userId);
      setList(response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //일기 목록이 있을 때는 목록 출력
  if (list.length > 0) {
    return (
      <div css={ListWrapper}>
        <ListNav />
        {list.map((item) => {
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
              handleDelete={handleDelete}
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
