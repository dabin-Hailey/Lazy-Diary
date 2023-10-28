import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import Floating from "./components/common/Floating";
import Redirect from "./pages/Redirect";
import TopButton from "./components/common/TopButton";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        {/* <Floating /> */}
        <TopButton />
        <Footer />
      </>
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<LoginPage />}
        />
        <Route
          path="oauth/kakao/login"
          element={<Redirect />}
        />
        <Route
          path="signup"
          element={<SignUpPage />}
        />
        <Route
          path="list"
          element={<ListPage />}
        />
        <Route
          path="create"
          element={<CreatePage />}
        />
        <Route
          path="update/:id"
          element={<UpdatePage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
