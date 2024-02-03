import { Fragment, useCallback, useEffect, useState } from 'react';
import TopMovie from 'components/TopMovie';
import SummaryMovie from 'components/SummaryMovie';
import urls from 'utils/urls';
import { useDispatch, useSelector } from 'react-redux';
import { movieSelector, getMovie } from 'stores';
import Localbase from 'localbase';
import { dbName, tbName, tbWatch } from 'utils';
import { getMovies, addWatchlist, getWatchlist, deleteWatchlist } from "services";
import Loading from 'components/Loading';
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(movieSelector);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddWatchlist = useCallback((data) => {
    addWatchlist(data);
    toast.success(`${data.title} ditambahkan`, {
      hideProgressBar: true,
      closeButton: false,
      autoClose: 3000,
      theme: 'colored',
      position: 'top-right',
    });
  }, []);

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

    localDb
      .collection(tbName)
      .get()
      .then((collections) => {
        if (collections.length === 0 ? getDataMovie() : dispatch(getMovie(collections[0]['data'])));
        setIsLoading(false);
      });
  }, []);

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
    <Fragment>
      {isLoading && <Loading />}
      <SummaryMovie data={movies.summaryList} />
      <TopMovie
        title='Top Movies'
        description='Movies kesayangan kamu'
        onSeeMore={urls.movie}
        data={movies.movieList}
        handleAddWatchlist={handleAddWatchlist}
        watchlist={movies?.watchList}
        handleDeleteWatchlist={handleDeleteWatchlist}
      />
      <TopMovie
        title='Top Anime'
        description='Anime kesayangan kamu'
        onSeeMore={urls.anime}
        data={movies.animeList}
        handleAddWatchlist={handleAddWatchlist}
        watchlist={movies?.watchList}
        handleDeleteWatchlist={handleDeleteWatchlist}
      />
      {movies?.watchList?.length > 0 && (
        <TopMovie
          title='Watchlist'
          description='Tonton yuk watchlist kamu'
          onSeeMore={urls.watchlist}
          data={movies.watchList}
          handleAddWatchlist={handleAddWatchlist}
          watchlist={movies?.watchList}
          handleDeleteWatchlist={handleDeleteWatchlist}
        />
      )}
    </Fragment>
  );
};

export default Home;
