import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/chats" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
