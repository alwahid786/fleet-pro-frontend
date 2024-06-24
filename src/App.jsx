import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
// import ProtectedRoute from "./utils/ProtectedRoute";
import RealTimeMap from "./pages/dashboard/RealTimeMap/RealTimeMap";
import Otp from "./pages/auth/otp/Otp";
import ForgetPassword from "./pages/auth/forget-password/ForgetPassword";
import ResetPassword from "./pages/auth/reset-password/ResetPassword";
import GlobalLoader from "./components/loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";

const Login = lazy(() => import("./pages/auth/login"));
const Home = lazy(() => import("./pages/dashboard/Home/Home"));
const TruckReport = lazy(() => import("./pages/dashboard/report/truckreport/TruckReport"));
const DailyOperations = lazy(() => import("./pages/dashboard/report/operations/DailyOperations"));
const SOS = lazy(() => import("./pages/dashboard/report/sos/SOS"));
const VideoEvidence = lazy(() => import("./pages/dashboard/report/video/VideoEvidence"));
const AlertType = lazy(() => import("./pages/dashboard/settings/alert/AlertType"));
const Drivers = lazy(() => import("./pages/dashboard/settings/drivers/Drivers"));
const Trucks = lazy(() => import("./pages/dashboard/settings/trucks/Trucks"));
const Devices = lazy(() => import("./pages/dashboard/settings/devices/Devices"));
const Users = lazy(() => import("./pages/dashboard/settings/users/Users"));

function App() {
    const loader = <GlobalLoader />;

    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <Suspense fallback={loader}>
                            <Login />
                        </Suspense>
                    }
                />
                <Route path="/verify-otp" element={<Otp />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/reset-password/:reset-token" element={<ResetPassword />} />
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route
                    path="/dashboard"
                    element={
                        // <ProtectedRoute>
                        <Suspense fallback={loader}>
                            <Dashboard />
                        </Suspense>
                        // </ProtectedRoute>
                    }
                >
                    <Route index element={<Navigate replace to="home" />} />
                    <Route
                        path="home"
                        element={
                            <Suspense fallback={loader}>
                                <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="reports/truckreport"
                        element={
                            <Suspense fallback={loader}>
                                <TruckReport />
                            </Suspense>
                        }
                    />
                    <Route
                        path="reports/operations"
                        element={
                            <Suspense fallback={loader}>
                                <DailyOperations />
                            </Suspense>
                        }
                    />
                    <Route
                        path="reports/sos"
                        element={
                            <Suspense fallback={loader}>
                                <SOS />
                            </Suspense>
                        }
                    />
                    <Route
                        path="reports/video"
                        element={
                            <Suspense fallback={loader}>
                                <VideoEvidence />
                            </Suspense>
                        }
                    />
                    <Route
                        path="setting/alert"
                        element={
                            <Suspense fallback={loader}>
                                <AlertType />
                            </Suspense>
                        }
                    />
                    <Route
                        path="setting/driver"
                        element={
                            <Suspense fallback={loader}>
                                <Drivers />
                            </Suspense>
                        }
                    />
                    <Route
                        path="setting/truck"
                        element={
                            <Suspense fallback={loader}>
                                <Trucks />
                            </Suspense>
                        }
                    />
                    <Route
                        path="setting/devices"
                        element={
                            <Suspense fallback={loader}>
                                <Devices />
                            </Suspense>
                        }
                    />
                    <Route
                        path="setting/users"
                        element={
                            <Suspense fallback={loader}>
                                <Users />
                            </Suspense>
                        }
                    />
                    <Route path="map" element={<RealTimeMap />} />
                </Route>
            </Routes>
            <ToastContainer />
        </Router>
    );
}

export default App;
