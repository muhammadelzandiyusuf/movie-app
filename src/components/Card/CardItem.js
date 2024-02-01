import CardLabel from './CardLabel';
import { thumbnailImage } from 'libraries/image';
import { FaPlus, FaStar } from 'react-icons/fa';

const CardItem = () => {
  return (
    <div className={'list__item'}>
      <div className='item__header'>
        <img src={thumbnailImage.image} alt={thumbnailImage.alt} />
      </div>
      <div className='item__body'>
        <div className='item__start'>
          <FaStar size={18} /> <span className='font__size--14'>8.6</span>
        </div>
        <CardLabel label='Nama Driver' />
        <div className='item__watch'>
          <FaPlus size={14} /> Watchlist
        </div>
      </div>
    </div>
  );
};

export default CardItem;
