import React from "react";
import Create from "../components/create";
import { useNavigate } from "react-router-dom";

const CreatePage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("userData") || "{}");

  if (currentUser) {
    return <Create />;
  } else {
    navigate("/");
  }
};

export default CreatePage;
