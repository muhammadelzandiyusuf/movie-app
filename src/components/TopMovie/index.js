import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import Button from '../Button';
import CardItem from '../Card/CardItem';

import 'assets/scss/header.scss';
import 'assets/scss/card.scss';

const TopMovie = ({
  title,
  description,
  onSeeMore,
  data,
  handleAddWatchlist,
  watchlist,
  handleDeleteWatchlist,
}) => {
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
          <Link to={onSeeMore}>
            <Button type='primary'>See More</Button>
          </Link>
        </Fade>
      </div>
      <Fade direction='up' triggerOnce>
        <div className='card__list'>
          {data?.slice(0, 8)?.map((item) => {
            const isWatch = watchlist?.find((watch) => watch.id === item.id);
            return (
              <CardItem
                {...item}
                handleAddWatchlist={handleAddWatchlist}
                key={item.id}
                isWatch={isWatch === undefined}
                handleDeleteWatchlist={handleDeleteWatchlist}
              />
            );
          })}
        </div>
      </Fade>
    </div>
  );
};

export default TopMovie;
