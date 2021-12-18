import React from 'react';
// ===== End of imports ===== //

const Row = (props) => {
  // ===== PROPS ===== //
  const {
    isPending,
    children,
    i
  } = props;

  // ===== Return ===== //
  return (
    <li
      className={`row${(isPending ? ' row--pending' : '')}`}
      style={{ transform : `translate(0, ${i * 5}rem)` }}
    >
      {children}
    </li>
  );
};

export default Row;