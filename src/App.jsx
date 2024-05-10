import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
// import { useDispatch } from "react-redux";
import { lazy } from 'react';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute.jsx';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';
// import { refreshUser } from "./redux/auth/operations.js";
// import { useAuth } from "./hooks";
import { AppWrapper } from './App.styled';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage.jsx'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage.jsx'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage.jsx'));

export default function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/tracker"
                component={<SignUpPage />}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute
                redirectTo="/tracker"
                component={<SignInPage />}
              />
            }
          />
          <Route
            path="/tracker"
            element={
              <PrivateRoute redirectTo="/" component={<TrackerPage />} />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
