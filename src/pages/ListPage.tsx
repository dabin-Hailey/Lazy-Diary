import React from "react";
import ListNav from "../components/list/ListNav";
import Item from "../components/list/Item";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles";

const ListPage: React.FC = () => {
  return (
    <div css={ListWrapper}>
      <ListNav />
      <Item />
    </div>
  );
};

export default ListPage;

const ListWrapper = css`
  // max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  background-color: ${colors.bgColor};

  margin-top: 3rem;
  margin-bottom: 5rem;
`;
