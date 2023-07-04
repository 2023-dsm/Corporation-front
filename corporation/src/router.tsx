import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import MainPage from "./pages/Main";
import WritePage from "./pages/Write";
import DocumentPage from "./pages/Document";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign" element={<SignUpPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/document" element={<DocumentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
