import { Fragment } from 'react';
import TopMovie from 'components/TopMovie';
import SummaryMovie from 'components/SummaryMovie';

const Home = () => {
  return (
    <Fragment>
      <SummaryMovie />
      <TopMovie title='Top Movies' description='Movies kesayangan kamu' />
      <TopMovie title='Top Anime' description='Anime kesayangan kamu' />
      <TopMovie title='Watchlist' description='Tonton yuk watchlist kamu' />
    </Fragment>
  );
};

export default Home;
