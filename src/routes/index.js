import { lazy } from 'react';
import urls from 'utils/urls';

const HomePages = lazy(() => import('pages/Home'));
const MoviePages = lazy(() => import('pages/Movie'));

const routes = [
  { title: 'Home Management', element: <HomePages />, exact: true, path: urls.home },
  { title: 'Movie Management', element: <MoviePages />, path: urls.movie },
];

export default routes;
