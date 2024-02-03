import 'assets/scss/modalRating.scss';
import { IoClose } from 'react-icons/io5';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';
import Button from '../Button';

const ModalRating = ({ ratingChanged, handleCloseRate, rate, handleSubmitRate }) => {
  return (
    <div className='modal'>
      <div className='modal__overlay' onClick={handleCloseRate} />
      <div className='modal__content'>
        <div className='modal__content__close' onClick={handleCloseRate}>
          <IoClose size={16} className='color__white' />
        </div>
        <div className='modal__content__icon'>
          <FaStar size={100} className='color__blue' />
        </div>
        <div className='modal__content__text'>
          <div className='font__size--24 font__weight--600'>Rate This</div>
          <ReactStars
            count={10}
            onChange={ratingChanged}
            size={32}
            isHalf={true}
            activeColor='#0061ff'
            emptyIcon={<FaStar />}
            halfIcon={<FaStarHalfAlt />}
            fullIcon={<FaStar />}
            value={Number(rate)}
          />
          <Button type='secondary' fullWidth onClick={handleSubmitRate}>
            <span className='font__size--16 font__weight--700'>Rate</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalRating;
