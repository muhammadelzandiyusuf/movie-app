import { Fragment } from 'react';
import TopMovie from 'components/TopMovie';
import SummaryMovie from 'components/SummaryMovie';
import urls from 'utils/urls';

const Home = () => {
  return (
    <Fragment>
      <SummaryMovie />
      <TopMovie title='Top Movies' description='Movies kesayangan kamu' onSeeMore={urls.movie} />
      <TopMovie title='Top Anime' description='Anime kesayangan kamu' onSeeMore={urls.anime} />
      <TopMovie
        title='Watchlist'
        description='Tonton yuk watchlist kamu'
        onSeeMore={urls.watchlist}
      />
    </Fragment>
  );
};

export default Home;
