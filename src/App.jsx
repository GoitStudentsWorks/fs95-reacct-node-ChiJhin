import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from './hooks/useAuth.js';
import { refresh } from './redux/auth/operations.js';
import { selectLoading, selectError } from './redux/selectors.js';
import Loader from './components/Loader/Loader.jsx';
import Error from './components/Error/Error.jsx';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage.jsx'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage.jsx'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage.jsx'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
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
          element={
            <PrivateRoute redirectTo="/signin" component={<TrackerPage />} />
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {loading && <Loader />}
      {error && <Error />}
    </div>
  );
}
