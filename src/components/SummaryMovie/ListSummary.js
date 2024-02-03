import { Fade } from 'react-awesome-reveal';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';
import urls from 'utils/urls';

const ListSummary = ({ data }) => {
  return (
    <Fade direction='up' triggerOnce cascade>
      <div className='list__summary'>
        {data?.slice(1, 4)?.map((item) => (
          <Link to={`${urls.movie}/${item.id}`} key={item.id}>
            <ListItem {...item} />
          </Link>
        ))}
      </div>
    </Fade>
  );
};

export default ListSummary;
