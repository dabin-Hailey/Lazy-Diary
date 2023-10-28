import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../@types/types";

const Kakao: React.FC = () => {
  const navigate = useNavigate();

  //카카오에서 받은 인가코드
  const AUTHORIZE_CODE: string | null = new URLSearchParams(
    window.location.search
  ).get("code");
  const GRANT_TYPE: string = "authorization_code";
  const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
  const LOGIN_REDIRECT_URI: string = import.meta.env.VITE_LOGIN_REDIRECT_URI;

  const fetchData = () => {
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${REST_API_KEY}&redirect_uri=${LOGIN_REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then((response) => {
        const { access_token } = response.data;
        const ACCESS_TOKEN = access_token;
        axios
          .post(
            "https://kapi.kakao.com/v2/user/me",
            {},
            {
              headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
                "Content-type":
                  "application/x-www-form-urlencoded;charset=utf-8"
              }
            }
          )
          .then((response) => {
            const { id, kakao_account } = response.data;
            const { profile } = kakao_account;
            const { nickname, profile_image_url } = profile;
            const recentLoginLog = Date.now(); //최근 로그인 기록
            const platform = "kakao";

            const newUserData: UserData = {
              id,
              nickname,
              photoURL: profile_image_url,
              recentLoginLog,
              platform,
              access_token
            };

            localStorage.setItem("userData", JSON.stringify(newUserData));
            navigate("/list");
          })
          .catch((error) => console.log("사용자 정보 받기 실패", error));
      })
      .catch((error) => console.log("토큰 받기 실패", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1
        style={{
          backgroundColor: "yellow",
          margin: "10rem",
          textAlign: "center",
          color: "red",
          fontSize: "30px",
          fontWeight: "bold"
        }}
      >
        카카오를 통해 로그인 중입니다 🔐
      </h1>
    </>
  );
};

export default Kakao;
