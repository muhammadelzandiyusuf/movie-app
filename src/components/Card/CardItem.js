import CardLabel from './CardLabel';
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import urls from 'utils/urls';

const CardItem = ({
  id,
  title,
  rate,
  year,
  thumbnail,
  handleAddWatchlist,
  isWatch,
  handleDeleteWatchlist,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${urls.movie}/${id}`, { replace: true });
  };

  return (
    <div className='list__item'>
      <div className='item__header' onClick={handleNavigate}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='item__body'>
        <div className='item__start' onClick={handleNavigate}>
          <FaStar size={18} /> <span className='font__size--14'>{rate}</span>
        </div>
        <CardLabel label={year} value={title} handleNavigate={handleNavigate} />
        <div
          className='item__watch'
          onClick={() =>
            isWatch
              ? handleAddWatchlist({ id, title, rate, year, thumbnail })
              : handleDeleteWatchlist({ id, title })
          }
        >
          {isWatch ? <FaPlus size={14} /> : <FaMinus size={14} />} Watchlist
        </div>
      </div>
    </div>
  );
};

export default CardItem;
