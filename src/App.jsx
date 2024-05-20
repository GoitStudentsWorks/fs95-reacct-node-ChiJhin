import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from './redux/auth/operations.js';
import { selectLoading } from './redux/selectors.js';
import Loader from './components/Loader/Loader.jsx';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import { store } from './redux/store.js';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage.jsx'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage.jsx'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage.jsx'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage.jsx'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    store.dispatch(refresh());
  }, [dispatch]);

  const loading = useSelector(selectLoading);

  return (
    <Suspense fallback={<b>Refreshing user...</b>}>
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
    </Suspense>
  );
}
