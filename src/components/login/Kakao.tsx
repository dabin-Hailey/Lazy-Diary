import axios from "axios";
import { useEffect, useState } from "react";

const Kakao = () => {
  const [userData, setUserData] = useState([]);

  //카카오에서 받은 인가코드
  const AUTHORIZE_CODE: string | null = new URLSearchParams(
    window.location.search
  ).get("code");
  console.log(AUTHORIZE_CODE);
  const GRANT_TYPE: string = "authorization_code";
  const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI: string = import.meta.env.VITE_REDIRECT_URI;

  const fetchData = () => {
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
        {},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then((response) => {
        const { data } = response;
        const { access_token: ACCESS_TOKEN } = data;

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
            console.log(response);
          })
          .catch((error) => console.log("사용자 정보 받기 실패", error));
      })
      .catch((error) => console.log("토큰 받기 실패", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>로그인 중입니다~~</div>;
};

export default Kakao;
