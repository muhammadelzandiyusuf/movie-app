import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import TopMovie from 'components/TopMovie';
import SummaryMovie from 'components/SummaryMovie';

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Shipper Driver Management</title>
      </Helmet>
      <SummaryMovie />
      <TopMovie title='Top Movies' description='Movies kesayangan kamu' />
      <TopMovie title='Top Anime' description='Anime kesayangan kamu' />
      <TopMovie title='Watchlist' description='Tonton yuk watchlist kamu' />
    </Fragment>
  );
};

export default Home;
