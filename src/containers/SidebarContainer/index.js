import { useDispatch, useSelector } from 'react-redux';
import { menuSelector, toggleMenu } from 'stores';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';
import { RiMovie2Fill } from 'react-icons/ri';
import urls from 'utils/urls';

const SidebarContainer = () => {
  const showMenu = useSelector(menuSelector);
  const dispatch = useDispatch();
  const location = useLocation();
  const pathName = location.pathname;

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
          <Link
            to={urls.home}
            className={`${pathName === urls.home ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <AiOutlineHome className='icon' /> Beranda
          </Link>
          <Link
            to={urls.movie}
            className={`${pathName === urls.movie ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <MdLocalMovies className='icon' /> Movies
          </Link>
          <Link
            to={urls.anime}
            className={`${pathName === urls.anime ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <RiMovie2Fill className='icon' /> Anime
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SidebarContainer;
