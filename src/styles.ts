/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const colors = {
  bgColor: "#faf3f0",
  secondBGColor: "rgba(173, 143, 143, 0.2)",
  primaryColor: "#5f4141",
  secondaryColor: "#a44a4a",
  placeholderColor: "#7a6464"
};

export const defaultBtn = css`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.secondaryColor};
  white-space: nowrap;

  box-sizing: border-box;
  background-color: ${colors.bgColor};
  border: 2px solid ${colors.secondaryColor};
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.secondaryColor};
    color: ${colors.bgColor};
    border: 2px solid ${colors.secondaryColor};
    box-shadow: 3px 3px 5px gray;
    cursor: pointer;
  }
`;

export const reverseBtn = css`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.bgColor};
  white-space: nowrap;

  box-sizing: border-box;
  background-color: ${colors.secondaryColor};
  border: 2px solid ${colors.secondaryColor};
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.bgColor};
    color: ${colors.secondaryColor};
    border: 2px solid ${colors.secondaryColor};
    cursor: pointer;
  }
`;

export const loginTitle = css`
  font-size: 4rem;
  font-weight: bold;
  color: ${colors.secondaryColor};
`;

export const loginForm = css`
  width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const loginFormText = css`
  font-size: 1.8rem;
  color: ${colors.primaryColor};
`;

export const loginInput = css`
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

export const loginBtn = css`
  ${reverseBtn} & {
    padding: 1rem 0;
  }
`;

export const editWrapperCommon = css`
  width: 100%;

  box-sizing: border-box;
  border: none;
  border-radius: 1rem;
  background-color: ${colors.secondBGColor};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

// 이모지 관련 css
export const emojiWrapper = css`
  ${editWrapperCommon}

  fieldset {
    border: none;
  }
`;

export const emojiTitle = css`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.secondaryColor};
  margin-top: 2rem;
`;

export const selectEmoji = css`
  width: 90%;
  height: 65%;
  margin-bottom: 2rem;

  img {
    width: 8rem;
    height: 8rem;
  }

  input[type="radio"] {
    display: none;
  }

  label {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    input {
      width: 10rem;
    }

    :hover {
      transform: scale(1.15);
    }
  }

  input[type="radio"] + label {
    width: 20%;
    height: 100%;

    border: none;
    border-radius: 1rem;

    line-height: 2.3rem;
    text-align: center;
    font-weight: normal;
    font-size: 1.5rem;
    color: ${colors.primaryColor};

    display: inline-block;
    cursor: pointer;
  }

  input[type="radio"]:checked + label {
    background-color: rgba(164, 74, 74, 0.4);
    font-weight: bold;
  }
`;

export const postWrapper = css`
  ${editWrapperCommon}

  textarea {
    resize: none;
    width: 85%;
    height: 10rem;

    margin-bottom: 2rem;
    padding: 1rem;
    box-sizing: border-box;

    font-size: 1.8rem;
    font-weight: normal;
    color: ${colors.primaryColor};

    background-color: transparent;
    // outline: 1px solid ${colors.secondaryColor};
    border: none;

    ::placeholder {
      font-style: italic;
      font-size: 1.6rem;
      color: #8e8e8e;
      font-weight: normal;
      text-align: start;
    }

    :focus {
      border: none;
      outline: 1px solid ${colors.secondaryColor};
      box-shadow: 0 0 0.7rem ${colors.secondaryColor};
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const photoWrapper = css`
  ${editWrapperCommon}

  input {
    display: flex;
  }

  img {
    width: 400px;
    height: 400px;
  }
`;
