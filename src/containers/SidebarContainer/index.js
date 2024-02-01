import { useDispatch, useSelector } from 'react-redux';
import { menuSelector, toggleMenu } from 'stores';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';
import { RiMovie2Fill } from 'react-icons/ri';

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
        <div className='logo'>
          <div className='close' onClick={closeMenu}>
            <AiOutlineClose />
          </div>
        </div>
        <div className='sidebar__menu'>
          <Link to='/'>
            <AiOutlineHome className='icon' /> Beranda
          </Link>
          <Link to='/' className='active'>
            <MdLocalMovies className='icon' /> Movies
          </Link>
          <Link to='/'>
            <RiMovie2Fill className='icon' /> Anime
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SidebarContainer;
