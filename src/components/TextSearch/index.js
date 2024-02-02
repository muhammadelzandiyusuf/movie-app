import 'assets/scss/textsearch.scss';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import urls from 'utils/urls';

const TextSearch = (props) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleSubmitForm = useCallback((data) => {
    console.log(data);
    navigate(urls.search, { replace: true });
  }, []);

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className={`textfield ${props.icon ? 'is__icon' : ''}`}
    >
      {props.icon}
      <input
        data-testid='textsearch'
        type='text'
        {...props}
        {...register('search', { required: true })}
      />
      <button type='submit' hidden />
    </form>
  );
};

export default TextSearch;
