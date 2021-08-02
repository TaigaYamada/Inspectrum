import React from 'react';

import { Add16Filled } from '@fluentui/react-icons';
import Row from './Row';
import Button from './Button';

// Data imports
import texts from '../data/texts';

// ===== End of imports ===== //

const AddColorButton = (props) => {
  // ===== PROPS ===== //
  const {
    i,
    addColor,
    displayLanguage
  } = props;

  // ===== Return ===== //
  return (
    <Row
      i={i}
    >
      <div className='row__group row__group--button'>
        <Button
          onClick={addColor}
        >
          <Add16Filled
            alt={texts[displayLanguage].addColor}
            className='button__icon'
          />

        </Button>
      </div>
    </Row>
  );
};

export default AddColorButton;