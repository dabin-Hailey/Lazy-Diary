import React from "react";
import Update from "../components/update";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("userData") || "{}");

  if (currentUser === "{}") {
    return <Update />;
  } else {
    Swal.fire({
      title: "로그인이 필요합니다.",
      text: "좋은 말로 할 때 로그인하세요 🤬",
      icon: "error",
      confirmButtonText: "확인"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  }
};

export default UpdatePage;
