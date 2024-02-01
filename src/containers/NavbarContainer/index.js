import { useDispatch } from 'react-redux';
import { toggleMenu } from 'stores';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import TextSearch from 'components/TextSearch';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { FaCircleUser } from 'react-icons/fa6';

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const openMenu = () => {
    dispatch(toggleMenu(true));
  };

  return (
    <div className='navbar'>
      <div className='mobile__menu'>
        <AiOutlineMenu className='font__size--24 margin__right--16px' onClick={openMenu} />
        <TextSearch
          placeholder='Cari Movie'
          icon={<AiOutlineSearch className='icon font__size--18 color__primary' />}
        />
      </div>
      <div className='profile'>
        <div className='watchlist'>
          <h5 className='username font__size--12 font__weight--600'>Watchlist</h5>
          <BsBookmarkHeartFill size={32} className='margin__right--16px' />
        </div>
        <h5 className='username font__size--12 font__weight--600 margin__right--8px'>
          Hello, <span className='color__primary'>Elzandi</span>
        </h5>
        <FaCircleUser size={32} />
      </div>
    </div>
  );
};

export default NavbarContainer;
