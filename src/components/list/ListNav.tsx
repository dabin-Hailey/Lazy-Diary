/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { reverseBtn } from "../../styles";
import { useNavigate } from "react-router-dom";

const ListNav: React.FC = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/edit");
  };

  return (
    <div css={ListHeaderWrapper}>
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
  justify-content: flex-end;

  button {
    ${reverseBtn}
    width: 27rem;
    height: 100%;
  }
`;
