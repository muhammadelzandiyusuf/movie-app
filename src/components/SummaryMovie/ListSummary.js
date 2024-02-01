import { Fade } from 'react-awesome-reveal';
import ListItem from './ListItem';

const ListSummary = () => {
  return (
    <div className='list__summary'>
      <Fade direction='up' triggerOnce cascade>
        <ListItem />
        <ListItem />
        <ListItem />
      </Fade>
    </div>
  );
};

export default ListSummary;
