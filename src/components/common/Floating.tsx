import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../styles";

const Floating: React.FC = () => {
  return <div css={floatingWrapper}></div>;
};

export default Floating;

const floatingWrapper = css`
  width: 100%;
  height: 10rem;

  background-color: ${colors.secondBGColor};
`;
