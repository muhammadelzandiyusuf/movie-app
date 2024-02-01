import 'assets/scss/loading.scss';

const Loading = () => {
  return (
    <div className='overlay display--flex justify__content--center align__items--center'>
      <div className='loading'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
