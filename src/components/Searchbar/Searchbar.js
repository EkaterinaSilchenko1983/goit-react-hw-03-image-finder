import { PropTypes } from 'prop-types';
// import { InputLabel, InputText, ButtonForm } from './ContactForm.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header>
      <form onSubmit={onSubmit}>
        <button type="submit" className="button">
          <span>Search</span>
        </button>

        <input
          className="input"
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
