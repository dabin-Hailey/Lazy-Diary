import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ListPage from "./pages/ListPage";
import EditPage from "./pages/EditPage";
import Redirect from "./pages/Redirect";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
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
          path="oauth/kakao/callback"
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
          path="edit"
          element={<EditPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
