import { thumbnailImage } from 'libraries/image';
import { IoPlayCircleOutline } from 'react-icons/io5';

const ListItem = () => {
  return (
    <div className='list__summary__item'>
      <div className='list__summary__image'>
        <img src={thumbnailImage.image} alt={thumbnailImage.alt} />
      </div>
      <div className='list__summary__text font__size--16'>
        <IoPlayCircleOutline size={16} />
        Do Mr. & Mrs. Smith Even Know Each Other?
      </div>
    </div>
  );
};

export default ListItem;
