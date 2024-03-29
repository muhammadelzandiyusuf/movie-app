import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

import { useCallback, useEffect, useState } from 'react';
import Button from 'components/Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { movieSelector, getMovieDetail, getMovie } from 'stores';
import Loading from 'components/Loading';
import Localbase from 'localbase';
import { dbName, tbName, tbRating, tbWatch } from 'utils';
import {
  addRatings,
  addWatchlist,
  deleteWatchlist,
  getMovies,
  getWatchlist,
  getRatings,
} from 'services';
import YoutubeIframe from 'components/YoutubeIframe';
import { toast } from 'react-toastify';
import { useOnlineStatus } from 'hooks/useOnlineStatus';
import { CiStar } from 'react-icons/ci';
import ModalRating from 'components/ModalRating';

import 'assets/scss/movieDetail.scss';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const movies = useSelector(movieSelector);
  const movie = movies.movieDetail;
  const yourRate = movies?.ratings?.find((item) => item.id === params.url);
  const isWatch = movies.watchList?.find((watch) => watch.id === params.url);
  const [isLoading, setIsLoading] = useState(true);
  const isOnline = useOnlineStatus();
  const [showRate, setShowRate] = useState(false);
  const [rating, setRating] = useState('');

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
        dispatch(getMovieDetail(params.url));
        setIsLoading(false);
      });
  }, [params.url, isOnline]);

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

  useEffect(() => {
    const localDb = new Localbase(dbName);
    localDb
      .collection(tbRating)
      .get()
      .then((collections) => {
        if (collections.length > 0) {
          getRatings(collections);
        }
      });
  }, []);

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

  const handleShowRate = () => {
    setShowRate(true);
  };

  const handleCloseRate = () => {
    setShowRate(false);
  };

  const ratingChanged = (rate) => {
    setRating(rate);
  };

  const handleSubmitRate = useCallback(() => {
    const localDb = new Localbase(dbName);
    addRatings({ id: params.url, rating: rating });
    localDb
      .collection(tbRating)
      .get()
      .then((collections) => {
        if (collections.length > 0) {
          getRatings(collections);
        }
      });
    setShowRate(false);
  }, [params.url, rating]);

  return (
    <div className='movie__detail'>
      {isLoading && <Loading />}
      <Fade direction='up' triggerOnce cascade>
        <div className='movie__detail__header'>
          <div className='font__size--36 font__weight--700'>
            {movie?.title} {movie?.year}
          </div>
          <div className='movie__detail__header__box'>
            <div className='movie__detail__header__rate'>
              <span className='font__size--16'>Rating</span>
              <div className='movie__detail__header__number'>
                <FaStar size={28} className='color__primary' />
                <span className='font__size--24 font__weight--700 margin__left--8px'>
                  {movie?.rate}
                </span>
                <span className='font__size--24 color__grey'>/10</span>
              </div>
            </div>
            <div className='movie__detail__header__rate cursor--pointer' onClick={handleShowRate}>
              <span className='font__size--16'>Your Rating</span>
              <div className='movie__detail__header__number'>
                {yourRate === undefined && <CiStar size={32} className='color__blue' />}
                {yourRate !== undefined && (
                  <>
                    <FaStar size={28} className='color__blue' />
                    <span className='font__size--24 font__weight--700 margin__left--8px'>
                      {yourRate?.rating}
                    </span>
                    <span className='font__size--24 color__grey'>/10</span>
                  </>
                )}
              </div>
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
            <Button
              type='primary'
              fullWidth
              onClick={() =>
                isWatch === undefined
                  ? handleAddWatchlist({
                      id: movie?.id,
                      title: movie?.title,
                      rate: movie?.rate,
                      year: movie?.year,
                      thumbnail: movie?.thumbnail,
                    })
                  : handleDeleteWatchlist({ id: movie?.id, title: movie?.title })
              }
            >
              {isWatch === undefined ? <FaPlus size={18} /> : <FaMinus size={18} />}
              <span className='font__size--20 font__weight--700'>Watchlist</span>
            </Button>
          </div>
        </div>
      </Fade>
      {showRate && (
        <ModalRating
          rate={yourRate?.rating}
          ratingChanged={ratingChanged}
          handleCloseRate={handleCloseRate}
          handleSubmitRate={handleSubmitRate}
        />
      )}
    </div>
  );
};

export default MovieDetail;
