import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
// import { useDispatch } from "react-redux";
import { lazy } from 'react';
// import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute.jsx';
// import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';
// import { refreshUser } from "./redux/auth/operations.js";
// import { useAuth } from "./hooks";

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage.jsx'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage.jsx'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage.jsx'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/tracker" element={<TrackerPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
