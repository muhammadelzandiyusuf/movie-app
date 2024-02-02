import { AiOutlineLeft, AiOutlineRight } from 'libraries/icon';
import { useNavigate } from 'react-router-dom';

import 'assets/scss/pagination.scss';

const Pagination = ({ total, limit, current }) => {
  const totalPage = Math.ceil(total / limit);
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (current < totalPage) {
      const newPage = current + 1;
      navigate(`?page=${newPage}`);
    }
  };

  const handlePreviousPage = () => {
    if (current > 1) {
      const newPage = current - 1;
      navigate(`?page=${newPage}`);
    }
  };

  return (
    <div className='display--flex flex__direction--column align__items--center margin__top--24px margin__bottom--24px'>
      <div className='pagination'>
        <h5
          onClick={handlePreviousPage}
          className={current === 1 ? 'color__grey' : 'cursor--pointer'}
        >
          <AiOutlineLeft className='margin__right--4px' /> Previous Page
        </h5>
        <h5
          onClick={handleNextPage}
          className={current === totalPage ? 'color__grey' : 'cursor--pointer'}
        >
          Next Page <AiOutlineRight className='margin__left--4px' />
        </h5>
      </div>
      <h6 className='color__grey font__weight--400'>{`${current} of ${totalPage}`}</h6>
    </div>
  );
};

export default Pagination;
