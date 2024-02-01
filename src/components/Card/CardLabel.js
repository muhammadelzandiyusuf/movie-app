const CardLabel = ({ label }) => {
  return (
    <div className='item__label' data-testid='cardlabel'>
      <h5 className='font__size--14 font__weight--400'>{label}</h5>
    </div>
  );
};

export default CardLabel;
