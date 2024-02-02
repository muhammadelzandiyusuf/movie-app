import CardLabel from './CardLabel';
import { FaPlus, FaStar } from 'react-icons/fa';

const CardItem = ({ title, rate, year, thumbnail }) => {
  return (
    <div className={'list__item'}>
      <div className='item__header'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='item__body'>
        <div className='item__start'>
          <FaStar size={18} /> <span className='font__size--14'>{rate}</span>
        </div>
        <CardLabel label={year} value={title} />
        <div className='item__watch'>
          <FaPlus size={14} /> Watchlist
        </div>
      </div>
    </div>
  );
};

export default CardItem;
