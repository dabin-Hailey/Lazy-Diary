import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const TopButton: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollButton = () => {
    if (window.scrollY > window.innerHeight) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollButton);

    return () => {
      window.removeEventListener("scroll", handleScrollButton);
    };
  }, []);

  return (
    showTopBtn && (
      <div css={topBtnWrapper}>
        <button
          css={topBtn}
          onClick={ScrollToTop}
        >
          TOP
        </button>
      </div>
    )
  );
};

export default TopButton;

const topBtnWrapper = css`
  position: sticky;
  bottom: 5rem;
  float: right;
`;

const topBtn = css`
  font-size: 3.8rem;
  font-weight: bold;
  color: #ffc949 !important;
`;
