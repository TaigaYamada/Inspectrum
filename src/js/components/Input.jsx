import React, { useRef, useEffect } from 'react';

// ===== End of imports ===== //

const Input = (props) => {
  const {
    type, step, name, unit, value, rowId, doLiveUpdate, updateIndex, updateCurrentColor
  } = props;

  // .toString() is to disallow adding "0" to the front of the value
  // Since adding "0" to the front of the value does not change the numerical magnitude, users were able to add infinite 0s in front of the value before
  // defaultValue is set when live update is off

  // If type==='number', need to align the text to appropriate digits
  const displayValue = (type === 'number'
    ? value.toFixed(Math.round(Math.abs(Math.log(step) / Math.log(10)))).toString()
    : value.toString());

  // Reference to itself (because functional components do not have 'this')
  const inputRef = useRef(null);

  // UseEffect hook to format & set the content of the input on updates
  // (function in the initial render is duplicated by setting the defaultValue for numbers)
  // Currently, live format is only on for numbers
  // The only other place where the value is set is onBlur()
  useEffect(() => {
    if (type === 'number') {
      if (parseFloat(inputRef.current.value) !== parseFloat(displayValue)) {
        inputRef.current.value = displayValue;
      }
      // Even if type is not a number (thus live format is off), value still needs to be live-updated when other inputs are edited
    } else if (document.activeElement !== inputRef.current) {
      inputRef.current.value = displayValue;
    }
  });

  // Passing arguments to modify color
  const modifyColor = () => {
    props.modifyColor(
      rowId,
      { [inputRef.current.name] : inputRef.current.value },
      unit
    );
  };

  return (
    <div className='input'>
      <input
        type={type}
        step={step}
        name={name}
        ref={inputRef}
        className='input__content'

        // Depending on the doLiveUpdate, update the store onChange or not
        onChange={modifyColor}
        // Setting default value (required for when validating empty field makes it equivalent to actual value)
        // ex: '' -> #000000
        defaultValue={displayValue}
        // Calls the updateCurrentColor() directly for focus, indirectly for Blur(deselection)
        onFocus={() => { updateCurrentColor(rowId); }}
        onBlur={(e) => {
          // This function is executed when input fires a blur event
          // Updates the index when:
          // No other target receives focus

          // Used to:
          // - update the index
          // - keep track of currently focused color
          // - update non-live input states
          //   - input value is then update in useEffect hook
          // - format input
          //   - Main updating of value is done in useEffect hook
          if (e.relatedTarget === null) {
            updateIndex();
          }
          updateCurrentColor(null);

          inputRef.current.value = displayValue;
        }}

      />
    </div>
  );
};

export default Input;