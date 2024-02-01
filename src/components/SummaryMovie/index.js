import 'assets/scss/summary.scss';
import { summaryThumbnailImage, thumbnailImage } from 'libraries/image';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { Fade } from 'react-awesome-reveal';
import ListSummary from './ListSummary';

const SummaryMovie = () => {
  return (
    <div className='summary'>
      <Fade direction='up' triggerOnce>
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
                <h5 className='font__size--36'>The Ministry of Ungentlemanly Warfare</h5>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <div className='summary__right'>
        <ListSummary />
      </div>
    </div>
  );
};

export default SummaryMovie;
