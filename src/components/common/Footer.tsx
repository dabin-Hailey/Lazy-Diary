/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import colors from "../../colors";

const Footer = () => {
  return (
    <div css={footerWrapper}>
      <div css={footerTextWrapper}>
        <span>copyright ⓒ 2023 All rights reserved by dabin-hailey</span>
        <span>
          📧 Mail me :{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=991012dabin@gmail.com"
            target="_blank"
          >
            991012dabin@gmail.com
          </a>
        </span>
        {/* <a href="mailto:991012dabin@gmail.com">991012dabin@gmail.com</a> */}
      </div>
      <div css={footerIconWrapper}>
        <a href="https://github.com/dabin-Hailey/Lazy-Diary">
          <img
            css={footerIcon}
            src="../../public/images/github.png"
          />
        </a>
        <a href="https://velog.io/@mary0393">
          <img
            css={footerIcon}
            src="../../public/images/blog.png"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;

const footerWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const footerTextWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.5rem;
  color: ${colors.primaryColor};

  a {
    color: ${colors.primaryColor};
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      text-decoration: none;
      background-color: yellow;
      font-size: 1.6rem;
    }
  }
`;

const footerIconWrapper = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const footerIcon = css`
  width: 3rem;
  height: 3rem;
`;
