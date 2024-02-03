import { IoPlayCircleOutline } from 'react-icons/io5';

const ListItem = ({ title, year, thumbnail }) => {
  return (
    <div className='list__summary__item'>
      <div className='list__summary__image'>
        <img src={thumbnail} alt='Thumbnail Image' />
      </div>
      <div className='list__summary__text font__size--16'>
        <IoPlayCircleOutline size={16} />
        {title} ({year})
      </div>
    </div>
  );
};

export default ListItem;
