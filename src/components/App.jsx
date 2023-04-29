import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const FilmDetailsPage = lazy(() => import('../pages/FilmsDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="movies" element={<MoviesPage></MoviesPage>} />
        <Route path="movies/:filmId" element={<FilmDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<MainPage />} />
      </Route>
    </Routes>
  );
};