import { lazy } from 'react';
import urls from 'utils/urls';

const HomePages = lazy(() => import('pages/Home'));
const MoviePages = lazy(() => import('pages/Movie'));
const AnimePages = lazy(() => import('pages/Anime'));
const SearchPages = lazy(() => import('pages/Search'));
const WatchlistPages = lazy(() => import('pages/Watchlist'));

const routes = [
  { title: 'Home Management', element: <HomePages />, exact: true, path: urls.home },
  { title: 'Movie Management', element: <MoviePages />, path: urls.movie },
  { title: 'Anime Management', element: <AnimePages />, path: urls.anime },
  { title: 'Search Management', element: <SearchPages />, path: urls.search },
  { title: 'Watchlist Management', element: <WatchlistPages />, path: urls.watchlist },
];

export default routes;
