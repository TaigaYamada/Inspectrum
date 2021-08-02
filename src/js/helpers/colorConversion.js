// Helper function of helper Function

// ===== Limiting a value to a range & decimal places ===== //
// Arguments:
// num: float (number to clip)
// max: float (maximum value)
// min: float (minimum value)
// digit: int (decimal places)
const clip = (num, max, min, digit) => (
  Math.round(
    Math.min(
      Math.max(num, min),
      max
    ) * (10 ** digit)
  ) / (10 ** digit)
);

// ======================= //
// ===== RGB related ===== //
// ======================= //

// ===== Validating RGB ===== //
export const validateRgb = (rgb) => (
  Object.keys(rgb).reduce((totalRgb, key) => {
    const nextRgb = { ...totalRgb };

    // 1. Convert the value to a number
    let value = parseFloat(rgb[key]);

    // 2. Deal with NaN
    if (Number.isNaN(value)) {
      value = 0;
    }

    // 3. Deal with out-of-bounds (0 ~ 255)
    // 4. Limit the number of decimal digits
    value = clip(value, 255, 0, 0);

    nextRgb[key] = value;
    return nextRgb;
  }, {})
);

// ===== Compares RGB ===== //
export const isSameRgb = (rgb1, rgb2) => (
  rgb1.r === rgb2.r
  && rgb1.g === rgb2.g
  && rgb1.b === rgb2.b
);

// ======================= //
// ===== HSL related ===== //
// ======================= //

// ===== Validating HSL ===== //
export const validateHsl = (hsl) => {
  // Processing that must be done for all H,S,L
  const newHsl = Object.keys(hsl).reduce((totalHsl, key) => {
    const nextHsl = { ...totalHsl };

    // 1. Convert the value to a number
    let value = parseFloat(hsl[key]);

    // 2. Deal with NaN
    if (Number.isNaN(value)) {
      value = 0;
    }

    nextHsl[key] = value;
    return nextHsl;
  }, {});

  // 3. Deal with out-of-bounds
  // 4. Limit the number of decimal digits
  // These processes will be done on per-key basis

  // Only appends values to the final object if it exists in the input
  // I need to handle things like this to allow partial hsl objects
  const finalHsl = {};

  if (typeof newHsl.h !== 'undefined') {
    finalHsl.h = clip(newHsl.h, 360, 0, 0); // 0 ~ 360 for H
  }

  if (typeof newHsl.s !== 'undefined') {
    finalHsl.s = clip(newHsl.s, 1, 0, 2); // 0 ~ 1 for S
  }

  if (typeof newHsl.l !== 'undefined') {
    finalHsl.l = clip(newHsl.l, 1, 0, 2); // 0 ~ 1 for L
  }

  return finalHsl;
};

// ===== Converting HSL to RBG ===== //
// Arguments:
// hsl: {
//        h:
//        s:
//        l:
//      }
// *Requres full hsl object

// Calculates RGB from HSL based on the formula found in Wikipedia at https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
// Accessed: 6/29/2021, 11:42pm

export const hslToRgb = (hsl) => {
  // Base function

  const formula = (n) => {
    const coef = hsl.s * Math.min(hsl.l, 1 - hsl.l);
    const value = (n + (hsl.h / 30)) % 12;

    return (
      hsl.l - coef * Math.max(-1, Math.min(value - 3, 9 - value, 1))
    );
  };

  return ({
    r : formula(0) * 255,
    g : formula(8) * 255,
    b : formula(4) * 255
  });
};

// ===== Converting RGB to HSL ===== //
// Calculates HSL from RGB based on the formula found in Wikipedia at https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
// Accessed: 6/29/2021, 11:42pm

export const rgbToHsl = (rgb) => {
  const [r, g, b] = [rgb.r / 255, rgb.g / 255, rgb.b / 255];

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  const chroma = max - min;

  const l = (max + min) / 2;

  let h;

  if (chroma === 0) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + ((g - b) / chroma));
  } else if (max === g) {
    h = 60 * (2 + ((b - r) / chroma));
  } else if (max === b) {
    h = 60 * (4 + ((r - g) / chroma));
  }

  const s = ((l === 0 || l === 1) ? 0 : ((max - l) / Math.min(l, 1 - l)));

  return ({
    h,
    s,
    l
  });
};

// ======================= //
// ===== HEX related ===== //
// ======================= //

// ===== Validating HEX ===== //
// Arguments:
// hex: {hex}
export const validateHex = (hex) => {
  // 1. Convert the value to a string
  let value = `${hex.hex}`;

  // 2. Get rid of initial '#' (if there is one)
  value = (value.charAt(0) === '#' ? value.slice(1) : value);

  // 2. turn everything into lowercase
  value = value.toLowerCase();

  // 3. Deal with out-of-bounds (0 ~ f)

  // Defining the letters that are "in bounds"
  const validCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  // There is a need to iterate over the string
  // Default value for when any digit is out of bounds is '0'
  value = [...value].reduce((total, character) => (
    (validCharacters.includes(character) ? `${total}${character}` : `${total}0`)
  ), '');

  // 4. Limit the number of digits to 6
  value = value.slice(0, 6);

  // 5. Add '0' to the end if string is not long enough
  while (value.length < 6) {
    value = `${value}0`;
  }

  // 6. Add back the '#'
  return ({ hex : `#${value}` });
};

// ===== Converting HEX to RGB ===== //
// Arguments:
// hex: {hex}
export const hexToRgb = (hex) => (
  // The character at '0' is ignored, because that is supposed to be '#'
  {
    r : parseInt(hex.hex.slice(1, 3), 16),
    g : parseInt(hex.hex.slice(3, 5), 16),
    b : parseInt(hex.hex.slice(5, 7), 16)
  }
);

// ===== Converting RGB to HEX ===== //
// Arguments:
// rgb: {
//        r:
//        g:
//        b:
//      }
// *Requres full rgb object
export const rgbToHex = ({ r, g, b }) => {
  // Converting to base-16
  let newR = r.toString(16);
  let newG = g.toString(16);
  let newB = b.toString(16);

  // Adding '0' to the front if the converted number is single digit
  newR = (newR.length === 1 ? `0${newR}` : newR);
  newG = (newG.length === 1 ? `0${newG}` : newG);
  newB = (newB.length === 1 ? `0${newB}` : newB);

  return (
    { hex : `#${newR}${newG}${newB}` }
  );
};

// =========================================== //
// ===== WCAG relative luminance related ===== //
// =========================================== //

// ===== Validating WCAG relative luminance ===== //
export const validateWcagLum = (wcagLum) => {
  // 1. Convert the value to a number
  let value = parseFloat(wcagLum);

  // 2. Deal with NaN
  if (Number.isNaN(value)) {
    value = 0;
  }

  // 3. Deal with out-of-bounds (0 ~ 255)
  // 4. Limit the number of decimal digits (while preserving trailing 0)
  value = clip(value, 1, 0, 4);

  return (value);
};

// ===== Converting RGB to WCAG relative luminance ===== //
// Arguments:
// rgb: {
//        r:
//        g:
//        b:
//      }
// *Requres full rgb object

// Calculates relative luminance according to the latest WCAG standards
// Current newest version: WCAG 2.1 at https://www.w3.org/TR/WCAG21/
export const rgbToWcagLum = (rgb) => {
  const ratio = [rgb.r / 255, rgb.g / 255, rgb.b / 255];

  const calculatedValue = ratio.map(
    (value) => (
      value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
    )
  );

  // Preserves 2 digits of trailing 0
  return (0.2126 * calculatedValue[0] + 0.7152 * calculatedValue[1] + 0.0722 * calculatedValue[2]);
};

// ===== Calculating WCAG contrast from relative luminance ===== //
export const calcWcagContrast = (wcagLum1, wcagLum2) => Math.round((wcagLum1 > wcagLum2 ? ((wcagLum1 + 0.05) / (wcagLum2 + 0.05)) : ((wcagLum2 + 0.05) / (wcagLum1 + 0.05))) * 100) / 100;

export const judgeWcagContrast = (wcagContrast, isWcagLarge = false) => {
  if (isWcagLarge) {
    if (wcagContrast >= 4.5) {
      return 'contrastPass';
    }
    if (wcagContrast >= 3) {
      return 'contrastCaution';
    }
    return 'contrastFail';
  }
  if (wcagContrast >= 7) {
    return 'contrastPass';
  }
  if (wcagContrast >= 4.5) {
    return 'contrastCaution';
  }
  return 'contrastFail';
};