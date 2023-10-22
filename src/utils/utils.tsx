import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";

//구글 로그아웃
export const handleGoogleLogout = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("userData");
      // navigate("/");
    })
    .catch((error) => {
      console.log("구글 로그아웃 에러", error);
    });
};
