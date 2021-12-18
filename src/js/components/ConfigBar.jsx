import React from 'react';

import texts from '../data/texts';

import ButtonInline from './ButtonInline';

import inspectrumLogo from '../../img/Inspectrum logo.svg';
// ===== End of imports ===== //

const ConfigBar = (props) => {
  const {
    displayLanguage,
    updateDisplayLanguage,
    changeModalState,
    toggleWcagMode,
    togglePreview
  } = props;

  return (
    <div
      className='config-bar'
    >
      <img
        src={inspectrumLogo}
        alt={texts[displayLanguage].logoAlt}
        className='config-bar__logo'
      />

      <div className='config-bar__group'>
        <ButtonInline onClick={() => changeModalState('license')}>
          {texts[displayLanguage].license}
        </ButtonInline>
        <div className='config-bar__toggle'>
          <input
            type='checkbox'
            onChange={toggleWcagMode}
            id='text-size'
          />
          <label htmlFor='text-size'>{texts[displayLanguage].textSizeToggle}</label>
        </div>
        <div className='config-bar__toggle'>
          <input
            type='checkbox'
            onChange={togglePreview}
            id='preview'
          />
          <label htmlFor='preview'>{texts[displayLanguage].previewToggle}</label>
        </div>
        <select
          className='config-bar__select'
          name='language'
          value={displayLanguage}
          onChange={(e) => updateDisplayLanguage(e.currentTarget.value)}
        >
          {
            Object.keys(texts).map((language) => (
              <option
                value={language}
                key={language}
              >
                {texts[language].languageName}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  );
};
export default ConfigBar;