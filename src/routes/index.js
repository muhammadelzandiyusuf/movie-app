import { lazy } from 'react';
import urls from 'utils/urls';

const HomePages = lazy(() => import('pages/Home'));
const MoviePages = lazy(() => import('pages/Movie'));
const AnimePages = lazy(() => import('pages/Anime'));
const SearchPages = lazy(() => import('pages/Search'));
const WatchlistPages = lazy(() => import('pages/Watchlist'));
const MovieDetailPages = lazy(() => import('pages/MovieDetail'));

const routes = [
  { title: 'Home Management', element: <HomePages />, exact: true, path: urls.home },
  { title: 'Movie Management', element: <MoviePages />, exact: true, path: urls.movie },
  { title: 'Anime Management', element: <AnimePages />, exact: true, path: urls.anime },
  { title: 'Search Management', element: <SearchPages />, exact: true, path: urls.search },
  { title: 'Watchlist Management', element: <WatchlistPages />, exact: true, path: urls.watchlist },
  {
    title: 'Movie Detail Management',
    element: <MovieDetailPages />,
    exact: true,
    path: urls.movieDetail,
  },
];

export default routes;
