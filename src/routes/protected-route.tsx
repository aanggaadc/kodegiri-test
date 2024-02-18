import { Navigate, Outlet } from "react-router-dom";

type PropsType = {
  isAllowed: boolean;
  redirectTo: string;
  children: React.ReactNode;
};

export default function ProtectedRoute({
  isAllowed,
  redirectTo = "/signin",
  children,
}: PropsType) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
}
