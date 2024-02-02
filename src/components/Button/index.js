import 'assets/scss/button.scss';

const Button = ({ type, children, fullWidth }) => {
  return (
    <button data-testid='button' className={`button ${type} ${fullWidth ? 'fullwidth' : ''}`}>
      {children}
    </button>
  );
};

export default Button;
