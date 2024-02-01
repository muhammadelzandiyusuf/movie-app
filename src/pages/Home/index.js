import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import HeaderTitle from 'components/HeaderTitle';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchDriver } from 'stores';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (value) => {
    dispatch(searchDriver(value));
    navigate('/');
  };

  return (
    <Fragment>
      <Helmet>
        <title>Shipper Driver Management</title>
      </Helmet>
      <HeaderTitle
        title='Driver Management'
        description='Daftar Driver yang bekerja dengan Anda'
        onChangeSearch={handleSearch}
      />
    </Fragment>
  );
};

export default Home;
