import { PropTypes } from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
