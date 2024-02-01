import ToastContainer from 'components/ToastContainer';

import SidebarContainer from '../SidebarContainer';
import NavbarContainer from '../NavbarContainer';

import 'assets/scss/layout.scss';

const MainContainer = ({ children }) => {
  return (
    <div className='container'>
      <ToastContainer pauseOnFocusLoss={false} closeOnClick={false} />
      <SidebarContainer />
      <div className='main__layout'>
        <NavbarContainer />
        <div className='main__content'>{children}</div>
      </div>
    </div>
  );
};

export default MainContainer;
