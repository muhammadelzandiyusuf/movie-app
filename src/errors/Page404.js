const Page404 = () => {
  return (
    <div
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div>
        <span style={{ borderRight: '1px solid #000000' }} className='padding__right--16px'>
          404
        </span>
        <span className='padding__left--16px' style={{ letterSpacing: 1 }}>
          Page Not Found!
        </span>
      </div>
    </div>
  );
};
export default Page404;
