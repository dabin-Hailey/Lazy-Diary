// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Login from "./components/login/Login";
import SignUp from "./components/signup/Signup";

function App() {
  return (
    <>
      <Header />
      {/* <Login /> */}
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
