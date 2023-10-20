// import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors, reverseBtn } from "../../styles";

const Login = () => {
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
      <button css={kakaoLoginBtn}>
        <img src="/images/kakao_login_large_wide.png"></img>
      </button>
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

const loginTitle = css`
  font-size: 4rem;
  font-weight: bold;
  color: ${colors.secondaryColor};
`;

const loginForm = css`
  width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const loginFormText = css`
  font-size: 1.8rem;
  color: ${colors.primaryColor};
`;

const loginInput = css`
  width: 35rem;
  min-height: 3rem;
  margin-bottom: 2rem;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${colors.secondaryColor};
  outline: none;

  font-size: 1.8rem;
  color: ${colors.secondaryColor};

  ::placeholder {
    font-style: italic;
    font-size: 1.8rem;
  }

  :focus {
    border: none;
    outline: 1px solid ${colors.secondaryColor};
    box-shadow: 0 0 0.7rem ${colors.secondaryColor};
  }
`;

const loginBtn = css`
  ${reverseBtn} & {
    padding: 1rem 0;
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

  img {
    width: 35rem;

    :hover {
      cursor: pointer;
    }
  }
`;
