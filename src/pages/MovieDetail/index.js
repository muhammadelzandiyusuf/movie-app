import { FaPlus, FaStar } from 'react-icons/fa';
import Youtube from 'react-youtube';

import 'assets/scss/movieDetail.scss';
import { useEffect, useRef } from 'react';
import Button from 'components/Button';
import { thumbnailImage } from 'libraries/image';

const frameRatio = [1180, 640];

const MovieDetail = () => {
  const frameEl = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (frameEl.current) {
        const frameWidth = frameEl.current.clientWidth;
        const height = frameWidth * (frameRatio[1] / frameRatio[0]);
        frameEl.current.style.height = `${height}px`;
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='movie__detail'>
      <div className='movie__detail__header'>
        <h1 className='font__size--36 font__weight--700'>Indoneisa</h1>
        <div className='movie__detail__header__rate'>
          <span className='font__size--16'>Rating</span>
          <div className='movie__detail__header__number'>
            <FaStar size={28} />
            <span className='font__size--24 font__weight--700 margin__left--8px'>7.8</span>
            <span className='font__size--24 color__grey'>/10</span>
          </div>
        </div>
      </div>
      <div ref={frameEl} className='movie__detail__video'>
        <Youtube
          videoId='fXqQ2tYW5Sk'
          title='Shipper About Us'
          opts={{
            width: '100%',
            height: '100%',
            playerVars: { rel: 0 },
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className='movie__detail__content'>
        <div className='movie__detail__content__description'>
          <div className='movie__detail__genre'>
            <div className='movie__detail__genre__item'>
              <span className='font__size--14'>Romance</span>
            </div>
            <div className='movie__detail__genre__item'>
              <span className='font__size--14'>Komedi</span>
            </div>
          </div>
          <div className='movie__detail__content__description__wrapper'>
            <div className='movie__detail__content__description__image'>
              <img src={thumbnailImage.image} alt={thumbnailImage.alt} />
            </div>
            <div className='movie__detail__content__wrapper'>
              <div className='font__size--16 margin__bottom--16px'>Description</div>
              <div className='font__size--16'>
                Director{' '}
                <span className='color__primary font__weight--700 margin__left--8px'>
                  David Fincer
                </span>
              </div>
              <div className='font__size--16'>
                Writers{' '}
                <span className='color__primary font__weight--700 margin__left--8px'>
                  Chuck Palahniuk Jim Uhls
                </span>
              </div>
              <div className='font__size--16'>
                Stars{' '}
                <span className='color__primary font__weight--700 margin__left--8px'>
                  David Fincer
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
    </div>
  );
};

export default MovieDetail;
