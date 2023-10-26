/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { colors, reverseBtn } from "../../styles";
import { useNavigate } from "react-router-dom";

const ListNav: React.FC = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/create");
  };

  return (
    <div css={ListHeaderWrapper}>
      <div css={inputWrapper}>
        <select>
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </select>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
        />
      </div>
      <button onClick={handleCreate}>오늘을 기록해보세요</button>
    </div>
  );
};

export default ListNav;

const ListHeaderWrapper = css`
  width: 100%;
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button {
    ${reverseBtn}
    width: 23%;
    height: 100%;
  }
`;

const inputWrapper = css`
  width: 70%;
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  select {
    width: 15%;
    height: 100%;

    padding: 0 2rem;

    font-size: 1.8rem;
    font-weight: normal;
    color: ${colors.primaryColor};

    background-color: ${colors.secondBGColor};
    outline: none;
    border: none;

    :focus {
      border: none;
      outline: 1px solid ${colors.secondaryColor};
      box-shadow: 0 0 0.7rem ${colors.secondaryColor};
    }
  }

  input {
    width: 60%;
    height: 100%;

    padding: 0 2rem;

    font-size: 2.3rem;
    font-weight: bold;
    color: ${colors.secondaryColor};

    background-color: ${colors.secondBGColor};
    outline: none;
    border: none;

    ::placeholder {
      font-style: italic;
      font-size: 2rem;
      color: #8e8e8e;
      font-weight: normal;
    }

    :focus {
      border: none;
      outline: 1px solid ${colors.secondaryColor};
      box-shadow: 0 0 0.7rem ${colors.secondaryColor};
    }
  }
`;
