// import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  loginBtn,
  loginForm,
  loginFormText,
  loginInput,
  loginTitle
} from "../../styles";

const SignUp = () => {
  return (
    <div css={signupWrapper}>
      <h1 css={loginTitle}>회원가입</h1>
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
          가입하기
        </button>
      </form>
    </div>
  );
};

export default SignUp;

const signupWrapper = css`
  margin: 10rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
