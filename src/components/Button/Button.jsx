import css from './Button.module.css';
export const Button = ({ handleLoadMore }) => {
  return (
    <>
      <button className={css.btn} onClick={handleLoadMore}>
        Load more
      </button>
    </>
  );
};
