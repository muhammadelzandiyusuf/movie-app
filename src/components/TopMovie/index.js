import { Fade } from 'react-awesome-reveal';
import Button from '../Button';
import CardItem from '../Card/CardItem';

import 'assets/scss/header.scss';
import 'assets/scss/card.scss';

const TopMovie = ({ title, description }) => {
  return (
    <div className='header'>
      <div className='header__content'>
        <div className='header__title'>
          <Fade direction='up' triggerOnce>
            <h1 className='font__size--26 font__weight--700 color__primary text__transform--uppercase'>
              {title}
            </h1>
          </Fade>
          <Fade direction='up' triggerOnce>
            <h5 className='font__weight--400'>{description}</h5>
          </Fade>
        </div>
        <Fade direction='up' triggerOnce>
          <Button type='primary'>See More</Button>
        </Fade>
      </div>
      <Fade direction='up' triggerOnce>
        <div className='card__list'>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </Fade>
    </div>
  );
};

export default TopMovie;
