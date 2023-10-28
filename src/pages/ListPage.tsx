import React from "react";
import List from "../components/list";
import { useNavigate } from "react-router-dom";

const ListPage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("userData") || "{}");

  if (currentUser) {
    return <List />;
  } else {
    navigate("/");
  }
};

export default ListPage;
