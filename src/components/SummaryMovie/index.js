import { summaryThumbnailImage, thumbnailImage } from 'libraries/image';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { Fade } from 'react-awesome-reveal';
import ListSummary from './ListSummary';
import { Link } from 'react-router-dom';
import urls from 'utils/urls';

import 'assets/scss/summary.scss';

const SummaryMovie = () => {
  return (
    <div className='summary'>
      <Fade direction='up' triggerOnce>
        <Link to={`${urls.movie}/url`}>
          <div className='summary__left'>
            <div className='summary__left__content'>
              <img src={summaryThumbnailImage.image} alt={summaryThumbnailImage.alt} />
              <div className='summary__left__overlay' />
              <div className='summary__left__wrapper'>
                <div className='summary__left__cover'>
                  <img src={thumbnailImage.image} alt={thumbnailImage.alt} />
                </div>
                <div className='summary__left__text'>
                  <IoPlayCircleOutline size={108} />
                  <div>The Ministry of Ungentlemanly Warfare</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Fade>
      <div className='summary__right'>
        <ListSummary />
      </div>
    </div>
  );
};

export default SummaryMovie;
