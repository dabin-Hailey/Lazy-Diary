/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors, reverseBtn } from "../../styles";
import { UserData } from "../../@types/types";
import { auth } from "../../firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleLogin: React.FC = () => {
  const provider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, photoURL, uid } = result.user;
        const recentLoginLog = Date.now(); //최근 로그인 기록
        const platform = "google";

        const newUserData: UserData = {
          id: uid,
          nickName: displayName,
          photoURL,
          recentLoginLog,
          platform
        };
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
