import React from 'react';
import { QuestionCircle20Regular } from '@fluentui/react-icons';
// ===== End of imports ===== //

const ButtonInline = (props) => {
  const {
    onClick,
    children
  } = props;

  return (
    <button
      type='button'
      className='button-inline'
      onClick={onClick}
    >
      {children}
      <QuestionCircle20Regular className='button-inline__icon' />
    </button>
  );
};

export default ButtonInline;