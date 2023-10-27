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

export const CreateWrapper = css`
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  background-color: ${colors.bgColor};

  margin: 5rem auto;
`;

export const createWrapperCommon = css`
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

export const CreateHeaderWrapper = css`
  width: 100%;
  height: 5.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  input {
    width: 70%;
    height: 100%;

    padding: 0 2rem;

    font-size: 2.3rem;
    font-weight: bold;
    color: ${colors.secondaryColor};

    background-color: ${colors.secondBGColor};
    outline: none;
    border: none;
    border-radius: 1rem;

    ::placeholder {
      font-style: italic;
      font-size: 2rem;
      color: #8e8e8e;
      font-weight: normal;
    }

    :focus {
      border: none;
      outline: 1px solid ${colors.secondaryColor};
      box-shadow: 0 0 0.7rem ${colors.secondaryColor};
    }
  }
`;

export const BtnWrapper = css`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  button {
    width: 50%;
    height: 100%;
  }
`;

export const emojiWrapper = css`
  ${createWrapperCommon}

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
  ${createWrapperCommon}

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
  ${createWrapperCommon}

  input[type="file"] {
    display: none;
  }

  img {
    width: 250px;
    height: 250px;
    margin-bottom: 2rem;
    cursor: pointer;
  }
`;

export const ListWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background-color: ${colors.bgColor};

  margin: 5rem auto;
`;

export const noList = css`
  font-size: 3rem;
  color: ${colors.secondaryColor};
`;

export const itemWrapper = css`
  width: 100%;
  padding: 2rem 3rem;

  box-sizing: border-box;
  border: none;
  border-radius: 1rem;

  background-color: ${colors.secondBGColor};

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;

  cursor: pointer;
`;

export const itemTitleWrapper = css`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const itemTitle = css`
  font-size: 2.3rem;
  font-weight: bold;
  color: ${colors.secondaryColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
`;

export const itemDate = css`
  font-size: 1.8rem;
  font-weight: normal;
  color: ${colors.primaryColor};
  white-space: nowrap;

  margin: 0;
`;

export const itemText = css`
  width: 100%;
  font-size: 1.8rem;
  font-weight: normal;
  color: ${colors.primaryColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
`;

export const itemImgWrapper = css`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  img {
    width: 5rem;
    height: 5rem;
  }
`;

export const itemBtnWrapper = css`
  ${BtnWrapper}

  width: 20%;

  button {
    ${defaultBtn}

    width: 50%;
    height: 100%;
    padding: 1rem;

    border: 1px solid ${colors.primaryColor};

    font-size: 1.5rem;
    color: ${colors.primaryColor};
    font-weight: normal;

    :hover {
      background-color: ${colors.primaryColor};
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
