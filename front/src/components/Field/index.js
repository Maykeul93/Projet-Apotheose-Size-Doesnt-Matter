import React from 'react';
import PropTypes from 'prop-types';

const Field = (props) => {
  const { onChange, ...otherProps } = props;
  return (
    <input
      {...otherProps}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Field.defaultProps = {
  value: '',
};

export default Field;