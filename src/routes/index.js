import { lazy } from 'react';

const HomePages = lazy(() => import('pages/Home'));

const routes = [{ title: 'Home Management', element: <HomePages />, exact: true, path: '/' }];

export default routes;
