import { useDispatch, useSelector } from 'react-redux';
import { menuSelector, toggleMenu } from 'stores';
import { Fragment } from 'react';
import { logo } from 'libraries/image';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineTeam, AiTwotoneCalendar } from 'react-icons/ai';

const SidebarContainer = () => {
  const showMenu = useSelector(menuSelector);
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(toggleMenu(false));
  };

  return (
    <Fragment>
      {showMenu && <div className='overlay' onClick={closeMenu} />}
      <div className={`sidebar ${showMenu ? 'show' : ''}`}>
        <div className='logo margin__bottom--16px'>
          <img src={logo.image} alt={logo.alt} />
        </div>
        <div className='sidebar__menu'>
          <Link to='/'>
            <AiOutlineHome className='icon' /> Beranda
          </Link>
          <Link to='/' className='active'>
            <AiOutlineTeam className='icon' /> Driver Management
          </Link>
          <Link to='/'>
            <AiTwotoneCalendar className='icon' /> Pickup
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SidebarContainer;
