import axios from "axios";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";

//구글 로그아웃
export const handleGoogleLogout = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("userData");
    })
    .catch((error) => {
      console.log("구글 로그아웃 에러", error);
    });
};

export const handleKakaoLogout = () => {
  const currentUser = JSON.parse(localStorage.getItem("userData") || "{}");

  axios
    .post(
      "https://kapi.kakao.com/v1/user/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${currentUser.access_token}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
        }
      }
    )
    .then((response) => {
      localStorage.removeItem("userData");
    })
    .catch((error) => console.log("카카오 로그아웃 에러", error));
};
