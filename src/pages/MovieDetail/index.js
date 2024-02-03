import { FaPlus, FaStar } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

import { useEffect, useState } from 'react';
import Button from 'components/Button';
import 'assets/scss/movieDetail.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { movieSelector, getMovieDetail, getMovie } from 'stores';
import Loading from 'components/Loading';
import Localbase from 'localbase';
import { dbName, tbName } from 'utils';
import { getMovies } from 'services';
import YoutubeIframe from 'components/YoutubeIframe';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const movie = useSelector(movieSelector).movieDetail;
  const params = useParams();

  console.log('movie', movie);

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
        dispatch(getMovieDetail(params.url));
        setIsLoading(false);
      });
  }, [params.url]);

  return (
    <div className='movie__detail'>
      {isLoading && <Loading />}
      <Fade direction='up' triggerOnce cascade>
        <div className='movie__detail__header'>
          <div className='font__size--36 font__weight--700'>
            {movie?.title} {movie?.year}
          </div>
          <div className='movie__detail__header__rate'>
            <span className='font__size--16'>Rating</span>
            <div className='movie__detail__header__number'>
              <FaStar size={28} />
              <span className='font__size--24 font__weight--700 margin__left--8px'>
                {movie?.rate}
              </span>
              <span className='font__size--24 color__grey'>/10</span>
            </div>
          </div>
        </div>
      </Fade>
      <YoutubeIframe videoId={movie?.youtubeId} videoTitle={movie?.title} />
      <Fade direction='up' triggerOnce cascade>
        <div className='movie__detail__content'>
          <div className='movie__detail__content__description'>
            <div className='movie__detail__genre'>
              {movie?.genre?.map((item) => (
                <div className='movie__detail__genre__item' key={item}>
                  <span className='font__size--14'>{item}</span>
                </div>
              ))}
            </div>
            <div className='movie__detail__content__description__wrapper'>
              <div className='movie__detail__content__description__image'>
                <img src={movie?.thumbnail} alt={movie?.title} />
              </div>
              <div className='movie__detail__content__wrapper'>
                <div className='font__size--16 margin__bottom--16px'>{movie?.description}</div>
                <div className='font__size--16'>
                  Director{' '}
                  <span className='color__primary font__weight--700 margin__left--8px'>
                    {movie?.director}
                  </span>
                </div>
                <div className='font__size--16'>
                  Writers{' '}
                  <span className='color__primary font__weight--700 margin__left--8px'>
                    {movie?.writers}
                  </span>
                </div>
                <div className='font__size--16'>
                  Stars{' '}
                  <span className='color__primary font__weight--700 margin__left--8px'>
                    {movie?.stars}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='movie__detail__content__watch'>
            <Button type='primary' fullWidth>
              <FaPlus size={18} />
              <span className='font__size--20 font__weight--700'>Watchlist</span>
            </Button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default MovieDetail;
