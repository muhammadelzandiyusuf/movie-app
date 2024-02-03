import 'assets/scss/button.scss';

const Button = ({ type, children, fullWidth, onClick }) => {
  return (
    <button
      data-testid='button'
      className={`button ${type} ${fullWidth ? 'fullwidth' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
