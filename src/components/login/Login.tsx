import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import GoogleLogin from "./Google";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  colors,
  loginBtn,
  loginForm,
  loginFormText,
  loginInput,
  loginTitle,
  reverseBtn
} from "../../styles";

interface UserData {
  id?: string | null;
  nickname?: string | null;
  profile_image_url?: string | null;
  recentLoginLog?: number | null;
  platform?: string | null;
  access_token?: string | null;
}

interface LoginType {
  userData: UserData;
  setUserData: (userData: UserData) => void;
}

const Login: React.FC<LoginType> = ({ userData, setUserData }) => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI: string = import.meta.env.VITE_REDIRECT_URI;
  const link: string = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const loginWithKakao = () => {
    window.location.href = link;
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      } else if (user && pathname === "/") {
        navigate("/list");
      }
    });
  }, [auth, navigate, pathname]);

  return (
    <div css={loginWrapper}>
      <h1 css={loginTitle}>로그인</h1>
      <form css={loginForm}>
        <p css={loginFormText}>이메일</p>
        <input
          css={loginInput}
          type="text"
          title="이메일을 입력해주세요."
        />
        <p css={loginFormText}>비밀번호</p>
        <input
          css={loginInput}
          type="password"
          title="비밀번호를 입력해주세요."
        />
        <button
          type="submit"
          css={loginBtn}
        >
          로그인
        </button>
      </form>
      <button css={signUpBtn}>회원가입</button>
      <div css={loginTextWrapper}>
        <p css={loginText}>또는</p>
      </div>
      <button
        css={kakaoLoginBtn}
        onClick={loginWithKakao}
      >
        <img src="/images/kakao_login_large_wide.png"></img>
      </button>
      <GoogleLogin setUserData={setUserData} />
    </div>
  );
};

export default Login;

const loginWrapper = css`
  margin: 10rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const signUpBtn = css`
  ${reverseBtn} & {
    width: 35rem;
    padding: 1rem 0;
    margin-top: 1rem;
    background-color: ${colors.primaryColor};
    border: 2px solid ${colors.primaryColor};

    :hover {
      color: ${colors.primaryColor};
      border: 2px solid ${colors.primaryColor};
    }
  }
`;

const loginTextWrapper = css`
  width: 35rem;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ::before {
    content: "";
    position: relative;
    top: 50%;
    width: 43%;
    transform: translateY(50%);
    border-top: 1px solid rgba(95, 65, 65, 0.5);
  }

  ::after {
    content: "";
    position: relative;
    top: 50%;
    width: 43%;
    transform: translateY(50%);
    border-top: 1px solid rgba(95, 65, 65, 0.5);
  }
`;

const loginText = css`
  font-size: 1.5rem;
  color: ${colors.primaryColor};
  white-space: nowrap;
`;

const kakaoLoginBtn = css`
  padding: 0;
  border: none;
  background-color: transparent;
  transition: all 0.2s ease-in-out;

  img {
    width: 35rem;

    :hover {
      cursor: pointer;
      transform: scale(1.03);
    }
  }
`;
