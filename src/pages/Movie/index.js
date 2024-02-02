import { Fade } from 'react-awesome-reveal';
import CardItem from 'components/Card/CardItem';
import Pagination from 'components/Pagination';

import 'assets/scss/movie.scss';
import 'assets/scss/card.scss';

const Movie = () => {
  return (
    <div className='movie'>
      <Fade direction='up' triggerOnce cascade>
        <h1 className='font__size--36 font__weight--700 margin__bottom--16px'>
          What to Watch - Movies
        </h1>
      </Fade>
      <Fade direction='up' triggerOnce cascade>
        <div className='movie__wrapper'>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </Fade>
      <Pagination total={20} limit={10} current={1} />
    </div>
  );
};

export default Movie;
