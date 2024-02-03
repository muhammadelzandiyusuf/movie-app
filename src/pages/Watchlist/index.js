import { Fade } from 'react-awesome-reveal';
import CardItem from 'components/Card/CardItem';
import Pagination from 'components/Pagination';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getMovie, movieSelector } from 'stores';
import { dbName, getSliceData, tbName, tbWatch } from 'utils';
import { Fragment, useCallback, useEffect, useState } from 'react';
import Localbase from 'localbase';
import { deleteWatchlist, getMovies, getWatchlist } from 'services';
import Loading from 'components/Loading';
import { noDataImage } from 'libraries/image';
import { toast } from 'react-toastify';
import { useOnlineStatus } from 'hooks/useOnlineStatus';

import 'assets/scss/movie.scss';
import 'assets/scss/card.scss';

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const movies = useSelector(movieSelector);
  const isOnline = useOnlineStatus();

  const limit = 10;
  const params = new URLSearchParams(location.search);
  const getSlice = getSliceData(params, limit);

  const [isLoading, setIsLoading] = useState(true);

  const handleDeleteWatchlist = useCallback((data) => {
    deleteWatchlist(data.id);
    toast.success(`${data.title} dihapus`, {
      hideProgressBar: true,
      closeButton: false,
      autoClose: 3000,
      theme: 'colored',
      position: 'top-right',
    });
  }, []);

  useEffect(() => {
    const localDb = new Localbase(dbName);
    const getDataMovie = async () => {
      const payload = { url: '/assets/data/movies.json' };
      await getMovies(payload);
    };
    if (isOnline) getDataMovie();
    localDb
      .collection(tbName)
      .get()
      .then((collections) => {
        if (
          collections.length === 0
            ? getDataMovie()
            : dispatch(getMovie(collections[collections.length - 1]['data']))
        );
        setIsLoading(false);
      });
  }, [isOnline]);

  useEffect(() => {
    const localDb = new Localbase(dbName);

    localDb
      .collection(tbWatch)
      .get()
      .then((collections) => {
        if (collections.length > 0) {
          getWatchlist(collections);
        }
      });
  }, []);

  return (
    <div className='movie'>
      {isLoading && <Loading />}
      <Fade direction='up' triggerOnce cascade>
        <h1 className='font__size--36 font__weight--700 margin__bottom--16px'>Watchlist</h1>
      </Fade>
      <Fade direction='up' triggerOnce cascade>
        {!isLoading && movies?.watchList?.length > 0 ? (
          <Fragment>
            <div className='movie__wrapper'>
              {movies?.watchList?.slice(getSlice.from, getSlice.to)?.map((movie) => {
                const isWatch = movies?.watchList?.find((watch) => watch.id === movie.id);
                return (
                  <CardItem
                    {...movie}
                    handleDeleteWatchlist={handleDeleteWatchlist}
                    key={movie.id}
                    isWatch={isWatch === undefined}
                  />
                );
              })}
            </div>
            <Pagination total={movies?.watchList?.length} limit={limit} current={getSlice.page} />
          </Fragment>
        ) : (
          <div className='alert'>
            <div className='alert__image'>
              <img src={noDataImage.image} alt={noDataImage.alt} />
            </div>
          </div>
        )}
      </Fade>
    </div>
  );
};

export default Search;
