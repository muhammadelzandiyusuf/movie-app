import { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loading from 'components/Loading';
import routes from 'routes';
import { store } from 'stores';
import MainContainer from 'containers/MainContainer';
import Page404 from 'errors/Page404';
import { useOnlineStatus } from 'hooks/useOnlineStatus';

import 'assets/scss/global.scss';
import { toast } from 'react-toastify';

function App() {
  const isOnline = useOnlineStatus();

  useEffect(() => {
    if (isOnline) {
      toast.success('you are online', {
        hideProgressBar: true,
        closeButton: false,
        autoClose: 3000,
        theme: 'colored',
        position: 'top-right',
      });
    } else {
      toast.error('you are offline', {
        hideProgressBar: true,
        closeButton: false,
        autoClose: 3000,
        theme: 'colored',
        position: 'top-right',
      });
    }
  }, [isOnline]);

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
