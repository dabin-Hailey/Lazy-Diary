/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";

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
          <img src="/images/arrow-up.png" />
        </button>
      </div>
    )
  );
};

export default TopButton;

const topBtnWrapper = css`
  width: 6rem;
  height: 6rem;
  position: sticky;
  bottom: 5rem;
  float: right;
`;

const topBtn = css`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  background-color: #e3b5a4;
  border: transparent;
  border-radius: 50%;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);

  img {
    width: 3rem;
    height: 3rem;
  }
  :hover {
    background-color: rgba(164, 74, 74, 0.7);
    cursor: pointer;
  }
`;
