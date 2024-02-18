import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import ProtectedRoute from "./protected-route";
import Home from "../pages/home";
import SignIn from "../pages/sign-in";
import Register from "../pages/register";
import History from "../pages/history";
import NotFound from "../pages/not-found";

const Routing = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={isLoggedIn} redirectTo="/signin">
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signin"
        element={
          <ProtectedRoute isAllowed={!isLoggedIn} redirectTo="/">
            <SignIn />
          </ProtectedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedRoute isAllowed={!isLoggedIn} redirectTo="/">
            <Register />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          <ProtectedRoute isAllowed={isLoggedIn} redirectTo="/signin">
            <History />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} errorElement={<NotFound />} />
    </Routes>
  );
};

export default Routing;
