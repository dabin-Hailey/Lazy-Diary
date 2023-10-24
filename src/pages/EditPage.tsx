/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles";

import EditHeader from "../components/edit/EditHeader";
import EditEmoji from "../components/edit/EditEmoji";
import EditPost from "../components/edit/EditPost";
import EditPicture from "../components/edit/EditPicture";

const EditPage: React.FC = () => {
  return (
    <form css={EditWrapper}>
      <EditHeader />
      <EditEmoji />
      <EditPost />
      <EditPicture />
    </form>
  );
};

export default EditPage;

const EditWrapper = css`
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  background-color: ${colors.bgColor};

  margin: 5rem auto;
`;
