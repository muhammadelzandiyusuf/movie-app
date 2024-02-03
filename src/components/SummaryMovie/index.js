import { coverImage } from 'libraries/image';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { Fade } from 'react-awesome-reveal';
import ListSummary from './ListSummary';
import { Link } from 'react-router-dom';
import urls from 'utils/urls';

import 'assets/scss/summary.scss';

const SummaryMovie = ({ data }) => {
  return (
    <div className='summary'>
      <Fade direction='up' triggerOnce>
        <Link to={`${urls.movie}/${data[0]?.id}`}>
          <div className='summary__left'>
            <div className='summary__left__content'>
              <img src={coverImage.image} alt={coverImage.alt} />
              <div className='summary__left__overlay' />
              <div className='summary__left__wrapper'>
                <div className='summary__left__cover'>
                  <img src={data[0]?.thumbnail} alt='Image Summary' />
                </div>
                <div className='summary__left__text'>
                  <IoPlayCircleOutline size={108} />
                  <div>
                    {data[0]?.title} ({data[0]?.year})
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Fade>
      <div className='summary__right'>
        <ListSummary data={data} />
      </div>
    </div>
  );
};

export default SummaryMovie;
