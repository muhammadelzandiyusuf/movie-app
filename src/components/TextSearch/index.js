import 'assets/scss/textsearch.scss';

const TextSearch = (props) => {
  return (
    <div className={`textfield ${props.icon ? 'is__icon' : ''}`}>
      {props.icon}
      <input data-testid='textsearch' type='text' {...props} />
    </div>
  );
};

export default TextSearch;
