import { Fragment, useEffect, useState } from 'react';
import TopMovie from 'components/TopMovie';
import SummaryMovie from 'components/SummaryMovie';
import urls from 'utils/urls';
import { useDispatch, useSelector } from 'react-redux';
import { movieSelector, getMovie } from 'stores';
import Localbase from 'localbase';
import { dbName, tbName } from 'utils';
import { getMovies } from 'services';
import Loading from 'components/Loading';

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(movieSelector);

  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <Fragment>
      {isLoading && <Loading />}
      <SummaryMovie data={movies.summaryList} />
      <TopMovie
        title='Top Movies'
        description='Movies kesayangan kamu'
        onSeeMore={urls.movie}
        data={movies.movieList}
      />
      <TopMovie
        title='Top Anime'
        description='Anime kesayangan kamu'
        onSeeMore={urls.anime}
        data={movies.animeList}
      />
      {movies?.watchlist?.length > 0 && (
        <TopMovie
          title='Watchlist'
          description='Tonton yuk watchlist kamu'
          onSeeMore={urls.watchlist}
          data={movies.watchlist}
        />
      )}
    </Fragment>
  );
};

export default Home;
