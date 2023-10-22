import { auth } from "../../../firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors, reverseBtn } from "../../../styles";

interface UserData {
  id?: string | null;
  nickname?: string | null;
  profile_image_url?: string | null;
  recentLoginLog?: number | null;
}

interface LoginType {
  setUserData: (userData: UserData) => void;
}

const GoogleLogin: React.FC<LoginType> = ({ setUserData }) => {
  const provider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const {
          displayName: nickname,
          photoURL: profile_image_url,
          uid: id
        } = result.user;
        const recentLoginLog = Date.now(); //최근 로그인 기록

        const newUserData: UserData = {
          id,
          nickname,
          profile_image_url,
          recentLoginLog
        };
        setUserData(newUserData);
        localStorage.setItem("userData", JSON.stringify(newUserData));
      })
      .catch((error) => console.log(error));
  };

  return (
    <button css={googleLoginBtn}>
      <div
        css={googleLoginBtnContent}
        onClick={loginWithGoogle}
      >
        <img src="/images/google-login.png"></img>
        구글 계정으로 로그인
      </div>
    </button>
  );
};

export default GoogleLogin;

const googleLoginBtn = css`
  ${reverseBtn} & {
    width: 35rem;
    padding: 1rem 0;
    margin-top: 1rem;
    background-color: ${colors.bgColor};
    border: 2px solid ${colors.secondaryColor};

    :hover {
      cursor: pointer;
      transform: scale(1.03);
    }
  }
`;

const googleLoginBtnContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: ${colors.secondaryColor};

  img {
    width: 2.5rem;
  }
`;
