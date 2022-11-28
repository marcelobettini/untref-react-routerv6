import { Outlet, Navigate } from "react-router-dom";
const useAuth = () => {
  const user = { isLoggedIn: false };
  return user.isLoggedIn;
};


const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/SignIn" />;
};

export default ProtectedRoute;