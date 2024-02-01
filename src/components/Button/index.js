import 'assets/scss/button.scss';

const Button = ({ type, children }) => {
  return (
    <button data-testid='button' className={`button ${type}`}>
      {children}
    </button>
  );
};

export default Button;
