import React from 'react';

// Data imports
import texts from '../data/texts';

import ButtonInline from './ButtonInline';
// ===== End of imports ===== //

const HeadingRow = (props) => {
  // ===== PROPS ===== //

  const {
    displayLanguage,
    changeModalState
  } = props;

  // ===== Return ===== //
  return (
    <li className='row row--heading'>
      <div className='row__group row__group--heading row__group--button' />
      <div className='row__group row__group--heading row__group--number' />
      <div className='row__group row__group--heading row__group--triple'>
        <div className='row__heading-line'>
          <div className='row__heading-cell'>
            <ButtonInline onClick={() => changeModalState('rgb')}>
              {texts[displayLanguage].rgbName}
            </ButtonInline>
          </div>
        </div>
        <div className='row__heading-line'>
          <div className='row__heading-cell'>
            <p>{texts[displayLanguage].rgbRName}</p>
          </div>
          <div className='row__heading-cell'>
            <p>{texts[displayLanguage].rgbGName}</p>
          </div>
          <div className='row__heading-cell'>
            <p>{texts[displayLanguage].rgbBName}</p>
          </div>
        </div>
      </div>

      <div className='row__group row__group--heading row__group--triple'>
        <div className='row__heading-line'>
          <div className='row__heading-cell'>
            <ButtonInline onClick={() => changeModalState('hsl')}>
              {texts[displayLanguage].hslName}
            </ButtonInline>
          </div>
        </div>
        <div className='row__heading-line'>
          <div className='row__heading-cell'>
            <p>{texts[displayLanguage].hslHName}</p>
          </div>
          <div className='row__heading-cell'>
            <p>{texts[displayLanguage].hslSName}</p>
          </div>
          <div className='row__heading-cell'>
            <p>{texts[displayLanguage].hslLName}</p>
          </div>
        </div>
      </div>
      <div className='row__group row__group--heading row__group--wide'>
        <div className='row__heading-line'>
          <div className='row__heading-cell'>
            <ButtonInline onClick={() => changeModalState('hex')}>
              {texts[displayLanguage].hexName}
            </ButtonInline>
          </div>
        </div>
      </div>
      <div className='row__group row__group--heading row__group--wide'>
        <div className='row__heading-line'>
          <div className='row__heading-cell row__heading-cell--direct'>
            <ButtonInline onClick={() => changeModalState('wcagLum')}>
              {texts[displayLanguage].wcagLumName}
            </ButtonInline>
          </div>
        </div>
      </div>
    </li>
  );
};
export default HeadingRow;