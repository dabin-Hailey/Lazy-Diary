// import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import colors from "../../colors";

const Header = () => {
  return (
    <div css={headerWrapper}>
      <div css={headerLeft}>
        <div css={profilePhoto}>
          <img src="../../public/images/profile-image.jpg" />
        </div>
        <div css={headerTitle}>김다빈님의 일기</div>
      </div>
      <div css={logoutBtn}>Log Out</div>
    </div>
  );
};

export default Header;

const headerWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const headerLeft = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const profilePhoto = css`
  width: 6rem;
  height: 6rem;
  border: transparent;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: transparent;
  }
`;

const headerTitle = css`
  font-size: 3.6rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  color: ${colors.primaryColor};
  white-space: nowrap;
`;

const logoutBtn = css`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.secondaryColor};
  white-space: nowrap;
  border: 2px solid #a44a4a;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.secondaryColor};
    color: ${colors.bgColor};
    cursor: pointer;
  }
`;
