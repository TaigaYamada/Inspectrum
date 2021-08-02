import {
  validateRgb, isSameRgb, validateHsl, hslToRgb, rgbToHsl, validateHex, hexToRgb, rgbToHex, validateWcagLum, rgbToWcagLum
} from '../helpers/colorConversion';

// ===== End of imports ===== //

// State is given empty initial value
const colorsReducer = (state = {}, action) => {
  // Main switch
  switch (action.type) {
  // ===== Action to add color ===== //
  // No arguments
  case 'ADD_COLOR':
    return {
      ...state,
      [Date.now()] : { // Using time as the unique ID
        // so if a user makes 2 colors in the same milisecond, this will break
        rgb : {
          r : 0,
          g : 0,
          b : 0
        },
        hsl : {
          h : 0,
          s : 0,
          l : 0
        },
        hex     : { hex : '#000000' },
        wcagLum : 0,
        index   : 0
      }

    };

    // ===== Action to delete color ===== //
    // Arguements:
    // colorId: String

    // DOES NOT DELETE THE COLOR IF THERE IS ONLY 1 LEFT

  case 'DELETE_COLOR':
  {
    const colorList = Object.keys(state);

    return (colorList.length === 1 ? state : {
      ...colorList
        .filter((colorId) => (colorId !== action.colorId))
        .reduce((colors, colorId) => {
          // Getting the result of the previous iteration
          const nextColors = { ...colors };
          // Adding a new element(color)
          nextColors[colorId] = state[colorId];
          // Returning the modified object
          return nextColors;
        }, {})
    });
  }

  // ===================================== //
  // ===== MODIFY series of reducers ===== //
  // ===================================== //

  // Inspectrum respects the inputted value, even when input does not lead to actual RGB change
  // (for example, in some cases, chaning hue in HSL by 1~2 produces exact same RGB)
  // To achieve this, the color is stored in every supported unit format, not just RGB

  // When input is made, its resulting RGB value is compared against the original value
  // - If there are no differences, only the originally inputted unit is updated

  //  - However, if the input actually DOES lead to a change in RGB, then:
  //    - Originally inputed unit is updated to the input
  //    - Other units are updated BACK from the new RGB
  //      ^^^ To do this last step in a DRY way, a helper function is used

  // To safely declare variables inside of each case, every MODIFY case is wrapped in {}
  // This is requred to compare resulting RGB to Original while satying DRY

  // Instructions for adding more unit support in the future:
  // For editable unit:
  // 1. Write validate???, ???ToRgb() and rgbTo???() function in ../helpers/colorConversion.js
  // 2. Add the unit to the list in the updateAllUnit() helper function written below
  // 3. Add the unit to the switch statement below
  // 4. Update the 'ADD_COLOR' reducer
  // 5. Update the default data in ../data/colors.js
  // 6. Update the props passed into Row from App
  // 7. Add forms to Row

  // For uneditable unit:
  // 1. Write validate??? and rgbTo???() function in ../helpers/colorConversion.js
  // 2. Add the unit to the list in the updateAllUnit() helper function written below
  // -
  // 3. Update the 'ADD_COLOR' reducer
  // 4. Update the default data in ../data/colors.js
  // 5. Update the props passed into Row from App
  // -

  // ===== Action to modify color from RGB ===== //
  // Arguements:
  // colorId: String
  // newValue: {key: new value}
  // inputType: String ('rgb', 'hsl')

  case 'MODIFY_COLOR':
  {
    // Helper function to shape the color Object, used in "MODIFY_COLOR"
    // Returns a partial color object with all updated values,
    // except for the specified exception.
    // used to modify colors

    // This function basically does not do anything when willUpdate argument is false
    // This function will also not work on the specified expeption, because the update for that is handled before this function is called
    const updateAllUnit = (willUpdate, rgb, exception) => {
      const color = {};

      if (willUpdate) {
        // List all cases of exception here
        if (exception !== 'rgb') {
          color.rgb = rgb;
        }

        if (exception !== 'hsl') {
          color.hsl = validateHsl(rgbToHsl(rgb));
        }

        if (exception !== 'hex') {
          color.hex = validateHex(rgbToHex(rgb));
        }

        // Uneditable units do not have their own conditionals
        color.wcagLum = validateWcagLum(rgbToWcagLum(rgb));
      }

      return color;
    };

    // Main code
    let fullNewValue;
    let newRgb;

    // Switch statement to deal with different input types
    switch (action.inputType) {
    case 'rgb':
      // 1. Complete the object
      fullNewValue = {
        ...state[action.colorId][action.inputType],

        // Validating the newValue values
        ...validateRgb(action.newValue)
      };

      // 2. Compute resulting RGB
      newRgb = fullNewValue;

      break;

    case 'hsl':
      // 1. Complete the object
      fullNewValue = {
        ...state[action.colorId][action.inputType],

        // Validating the newValue values
        ...validateHsl(action.newValue)
      };

      // 2. Compute resulting RGB
      newRgb = validateRgb(hslToRgb(fullNewValue));

      break;

    case 'hex':
      // 1. Complete the object
      // But there is no need to spread the old state, because there is only 1 field
      fullNewValue = {
        ...validateHex(action.newValue)
      };

      // 1. Compute resulting RGB
      newRgb = validateRgb(hexToRgb(fullNewValue));
      break;

    default:
      break;
    }

    return {
      ...state,
      [action.colorId] : {
        ...state[action.colorId],

        // 3. Update original inputted unit
        [action.inputType] : fullNewValue,

        // 4. Update all other unit, if necessary
        ...updateAllUnit(
          // undateAllUnit() needs to run when colors are DIFFERENT (=isSameRgb is false)
          !isSameRgb(newRgb, state[action.colorId].rgb),
          newRgb,
          action.inputType
        )
      }

    };
  }

  // ===== Action to update index ===== //
  // Arguements:
  // none

  // Index is updated at a different timing than other color units, hence its own reducer/action
  case 'UPDATE_INDEX':
    return {
      ...state,
      ...Object.keys(state).reduce((colors, colorId) => {
        // Getting the result of the previous iteration
        const nextColors = { ...colors };

        // Adding a new element(color)
        // Updates the index to the current value of wcagLum while doing so
        nextColors[colorId] = {
          ...state[colorId],
          index : state[colorId].wcagLum
        };

        // Return the modified Object
        return nextColors;
      }, {})
    };

  // If no match, don't do anything
  default:
    return state;
  }
};

export default colorsReducer;