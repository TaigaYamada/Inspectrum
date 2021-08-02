import React from 'react';

import texts from '../data/texts';
// ===== End of imports ===== //

const Preview = (props) => {
  // ===== PROPS ===== //
  const { colors, displayLanguage, previewSelection } = props;
  const { color1, color2 } = previewSelection;

  // Checking the existence of the color, then assigning the variable
  // If color is non-existent, defaults to white
  const r1 = (typeof colors[color1] !== 'undefined' ? colors[color1].rgb.r : 255);
  const g1 = (typeof colors[color1] !== 'undefined' ? colors[color1].rgb.g : 255);
  const b1 = (typeof colors[color1] !== 'undefined' ? colors[color1].rgb.b : 255);

  const r2 = (typeof colors[color2] !== 'undefined' ? colors[color2].rgb.r : 255);
  const g2 = (typeof colors[color2] !== 'undefined' ? colors[color2].rgb.g : 255);
  const b2 = (typeof colors[color2] !== 'undefined' ? colors[color2].rgb.b : 255);

  // ===== Return ===== //
  return (
    <div
      className='preview'
    >
      <div
        className='preview--container'
        style={{ backgroundColor : `rgb(${r2},${g2},${b2})` }}
      >
        <h1 style={{ color : `rgb(${r1},${g1},${b1})` }}>{texts[displayLanguage].previewHeading}</h1>
        <p style={{ color : `rgb(${r1},${g1},${b1})` }}>
          {texts[displayLanguage].previewText}
        </p>
      </div>
    </div>
  );
};

export default Preview;