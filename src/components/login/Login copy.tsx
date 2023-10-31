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

const Login: React.FC = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const currentUser = JSON.parse(localStorage.getItem("userData") || "{}");

  const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
  const LOGIN_REDIRECT_URI: string = import.meta.env.VITE_LOGIN_REDIRECT_URI;
  const link: string = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${LOGIN_REDIRECT_URI}`;

  const loginWithKakao = () => {
    window.location.href = link;
  };

  useEffect(() => {
    if (currentUser.platform === "google") {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          navigate("/");
        } else if (user && pathname === "/") {
          navigate("/list");
        }
      });
    } else if (currentUser.platform === "kakao" && pathname === "/")
      navigate("/list");
  }, [auth, navigate, pathname]);

  return (
    <div css={loginWrapper}>
      <div css={loginDesription}>
        <h2>일기 쓰기가 귀찮은 사람들을 위한 이모지 일기 😊</h2>
        <h1>✏️ Lazy Diary</h1>
        <p>
          오늘 하루의 기분을 표현할 수 있는 이모지를 선택하는 것만으로 일기 쓰기
          완료!
          <br />그 외에 기억하고 싶은 글이나 그림이 있다면 추가로 작성할 수
          있어요
        </p>
      </div>
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
      <GoogleLogin />
      <p css={loginInfo}>
        현재는 카카오 또는 구글 로그인을 통해서만 서비스 이용이 가능해요 ☺️
        <br />
        Lazy Diary 이용 중 불편사항, 문의사항, 궁금점 등이 있으면 아래 메일로
        연락주세요.
        <br />
        <br />- 세상에서 가장 Lazy한 개발자 🩷 -
      </p>
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

const loginDesription = css`
  color: ${colors.primaryColor};
  text-align: center;
  margin-bottom: 8rem;

  h1 {
    font-size: 4rem;
    color: ${colors.secondaryColor};
  }

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.8rem !important;
    line-height: 3rem;
  }
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

const loginInfo = css`
  ${loginText}

  text-align: center;
  line-height: 2.5rem;
  margin-top: 5rem;
`;
