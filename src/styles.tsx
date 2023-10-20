/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const colors = {
  bgColor: "#faf3f0",
  secondBGColor: "rgba(173, 143, 143, 0.2)",
  primaryColor: "#5f4141",
  secondaryColor: "#a44a4a",
  placeholderColor: "#7a6464"
};

export const defaultBtn = css`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.secondaryColor};
  white-space: nowrap;

  box-sizing: border-box;
  background-color: ${colors.bgColor};
  border: 2px solid ${colors.secondaryColor};
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.secondaryColor};
    color: ${colors.bgColor};
    border: 2px solid ${colors.secondaryColor};
    box-shadow: 3px 3px 5px gray;
    cursor: pointer;
  }
`;

export const reverseBtn = css`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.bgColor};
  white-space: nowrap;

  box-sizing: border-box;
  background-color: ${colors.secondaryColor};
  border: 2px solid ${colors.secondaryColor};
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.bgColor};
    color: ${colors.secondaryColor};
    border: 2px solid ${colors.secondaryColor};
    cursor: pointer;
  }
`;
