/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors, defaultBtn } from "../../styles";
import { useNavigate } from "react-router-dom";
import { handleGoogleLogout } from "../../utils/utils";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const currentUser = JSON.parse(localStorage.getItem("userData") || "{}");

  const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
  const LOGOUT_REDIRECT_URI: string = import.meta.env.VITE_LOGOUT_REDIRECT_URI;

  const link = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;

  const handleLogout = () => {
    if (currentUser.platform === "kakao") {
      window.location.replace(link);
      localStorage.clear();
    } else if (currentUser.platform === "google") {
      handleGoogleLogout();
      navigate("/");
    }
  };

  const handleClickLogo = () => {
    if (currentUser !== null) {
      navigate("/list");
    } else if (pathname) {
      navigate("/");
    }
  };

  if (currentUser === "{}") {
    return;
  } else {
    return (
      <div css={headerWrapper}>
        <div css={headerLeft}>
          <div css={profilePhoto}>
            {pathname !== "/" &&
            currentUser !== null &&
            currentUser.photoURL !== null ? (
              <img src={currentUser.photoURL} />
            ) : (
              <img src="/images/favicon.png" />
            )}
          </div>
          <div
            css={headerTitle}
            onClick={handleClickLogo}
          >
            {pathname !== "/" &&
            currentUser !== null &&
            currentUser.nickname !== null
              ? `${currentUser.nickname} 님의 일기`
              : `Lazy Diary`}
          </div>
        </div>
        {pathname !== "/" && (
          <div
            css={logoutBtn}
            onClick={handleLogout}
          >
            Log Out
          </div>
        )}
      </div>
    );
  }
};

export default Header;

const headerWrapper = css`
  max-width: 1200px;
  margin: 0 auto;

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
  font-weight: 600;
  letter-spacing: 0.1rem;
  color: ${colors.primaryColor};
  white-space: nowrap;
`;

const logoutBtn = css`
  ${defaultBtn} & {
    padding: 0.5rem 2rem;
  }
`;
