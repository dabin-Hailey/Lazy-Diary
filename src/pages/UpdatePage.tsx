import React from "react";
import Update from "../components/update";
import { useNavigate } from "react-router-dom";

const UpdatePage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("userData") || "{}");

  if (currentUser) {
    return <Update />;
  } else {
    navigate("/");
  }
};

export default UpdatePage;
