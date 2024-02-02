import { Fade } from 'react-awesome-reveal';
import CardItem from 'components/Card/CardItem';
import Pagination from 'components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie, movieSelector } from 'stores';
import { Fragment, useEffect, useState } from 'react';
import Localbase from 'localbase';
import { dbName, getSliceData, tbName } from 'utils';
import { getMovies } from 'services';
import { Link, useLocation } from 'react-router-dom';
import Loading from 'components/Loading';
import urls from 'utils/urls';
import { noDataImage } from 'libraries/image';

import 'assets/scss/movie.scss';
import 'assets/scss/card.scss';

const Anime = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const movies = useSelector(movieSelector);

  const limit = 10;
  const params = new URLSearchParams(location.search);
  const getSlice = getSliceData(params, limit);

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
    <div className='movie'>
      {isLoading && <Loading />}
      <Fade direction='up' triggerOnce cascade>
        <h1 className='font__size--36 font__weight--700 margin__bottom--16px'>
          What to Watch - Anime
        </h1>
      </Fade>
      <Fade direction='up' triggerOnce cascade>
        {!isLoading && movies?.animeList?.length > 0 ? (
          <Fragment>
            <div className='movie__wrapper'>
              {movies?.animeList?.slice(getSlice.from, getSlice.to)?.map((anime) => (
                <Link to={`${urls.movie}/${anime.id}`} key={anime.id}>
                  <CardItem {...anime} />
                </Link>
              ))}
            </div>
            <Pagination total={movies?.animeList?.length} limit={limit} current={getSlice.page} />
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

export default Anime;
