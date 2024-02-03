import { useDispatch, useSelector } from 'react-redux';
import { movieSelector, toggleMenu } from 'stores';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import TextSearch from 'components/TextSearch';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { FaCircleUser } from 'react-icons/fa6';
import urls from 'utils/urls';
import { Link } from 'react-router-dom';

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector(movieSelector);
  const openMenu = () => {
    dispatch(toggleMenu(true));
  };

  return (
    <div className='navbar'>
      <div className='mobile__menu'>
        <AiOutlineMenu
          className='font__size--24 margin__right--16px cursor--pointer'
          onClick={openMenu}
        />
        <TextSearch
          placeholder='Cari Movie'
          icon={<AiOutlineSearch className='icon font__size--18 color__primary' />}
        />
      </div>
      <div className='profile'>
        <Link to={urls.watchlist}>
          <div className='watchlist'>
            <h5 className='username font__size--12 font__weight--600'>
              Watchlist ({movies?.watchList?.length ?? ''})
            </h5>
            <BsBookmarkHeartFill size={24} className='margin__right--16px' />
          </div>
        </Link>
        <h5 className='username font__size--12 font__weight--600 margin__right--8px'>
          Hello, <span className='color__primary'>Elzandi</span>
        </h5>
        <FaCircleUser size={24} />
      </div>
    </div>
  );
};

export default NavbarContainer;
