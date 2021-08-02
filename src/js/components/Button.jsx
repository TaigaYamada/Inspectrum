import React from 'react';
// ===== End of imports ===== //

const Button = (props) => {
  const {
    onClick,
    disabled,
    isCorner,
    children
  } = props;

  return (
    <button
      type='button'
      className={`button${isCorner ? ' button--corner' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;