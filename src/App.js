import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loading from 'components/Loading';
import routes from 'routes';
import { store } from 'stores';
import MainContainer from 'containers/MainContainer';
import Page404 from 'errors/Page404';

import 'assets/scss/global.scss';

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <MainContainer>
            <Routes>
              {routes.map((route, index) => (
                <Route {...route} key={index} />
              ))}
              <Route path='*' element={<Page404 />} />
            </Routes>
          </MainContainer>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
