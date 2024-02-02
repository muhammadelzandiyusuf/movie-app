const CardLabel = ({ label, value }) => {
  return (
    <div className='item__label' data-testid='cardlabel'>
      <h6 className='color__grey font__weight--400'>{label}</h6>
      <h5 className='font__weight--400'>{value}</h5>
    </div>
  );
};

export default CardLabel;
