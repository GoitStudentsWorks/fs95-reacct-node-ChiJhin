import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from './hooks/useAuth.js';
import { refresh } from './redux/auth/operations.js';
import { selectLoading } from './redux/selectors.js';
import Loader from './components/Loader/Loader.jsx';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute.jsx';

import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import SignInPage from './pages/SignInPage/SignInPage.jsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import TrackerPage from './pages/TrackerPage/TrackerPage.jsx';
import { store } from './redux/store.js';
import { Toaster } from 'react-hot-toast';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
// const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage.jsx'));
// const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage.jsx'));
// const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage.jsx'));
// const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage.jsx'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    store.dispatch(refresh());
  }, [dispatch]);

  const loading = useSelector(selectLoading);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/tracker" component={<HomePage />} />
          }
        />

        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/tracker" component={<SignUpPage />} />
          }
        />

        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/tracker" component={<SignInPage />} />
          }
        />

        <Route
          path="/tracker"
          element={<PrivateRoute redirectTo="/" component={<TrackerPage />} />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {loading && <Loader />}
    </div>
  );
}
