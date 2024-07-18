/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isLogin = false, children, redirect = "/login" }) => {
    if (!isLogin) return <Navigate to={redirect} />;
    return children ? children : <Outlet />;
};

export default ProtectedRoute;
