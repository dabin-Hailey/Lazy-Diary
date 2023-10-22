import React, { useState } from "react";
import Login from "../components/login/Login";

const LoginPage = () => {
  const [userData, setUserData] = useState({});

  return (
    <div>
      <Login
        userData={userData}
        setUserData={setUserData}
      />
    </div>
  );
};

export default LoginPage;
