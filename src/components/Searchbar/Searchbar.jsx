import css from './Searchbar.module.css';
import iconSearch from '../../images/icons.svg';
import { useState } from 'react';
import PropTypes from 'prop-types';
export const Searchbar = ({ onSubmitValue }) => {
  const [value, setValue] = useState('');

  const handleChangeValue = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitValue(value);
    setValue('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormBtn}>
          <svg className={css.icon} width="20" height="20">
            <use xlinkHref={`${iconSearch}#icon-search`}></use>
          </svg>
        </button>
        <input
          onChange={handleChangeValue}
          value={value}
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmitValue: PropTypes.func.isRequired,
};
