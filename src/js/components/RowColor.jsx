import React from 'react';

import { Dismiss16Filled } from '@fluentui/react-icons';
import Row from './Row';
import Input from './Input';
import WcagCell from './WcagCell';
import Button from './Button';
import connectComponent from '../helpers/connectComponent';
// Data imports
import texts from '../data/texts';

// ===== End of imports ===== //

const RowColor = (props) => {
  // ===== PROPS ===== //
  const {
    colors,
    sortedColorList,
    i,
    rowId,
    deleteColor,
    updateIndex,
    modifyColor,
    changePreview,
    updateCurrentColor,
    ui
  } = props;

  const {
    rgb, hsl, hex, wcagLum, index
  } = colors[rowId];

  const {
    previewSelection,
    currentColor,
    displayLanguage,
    isWcagLarge
  } = ui;

  // ===== Funtion to Calculate the future order of colors ===== //
  // Used to preview color order change
  const willChangeOrder = (
    // First expression: No need to re-check the order if index has not changed
    // Also, prevents ALL rows from getting the mark. Just the one that is modified

    // Without spread operator, array returned by .sort() is assigned back to sortedColorList
    wcagLum !== index
    && i !== [...sortedColorList].sort(
      (first, second) => (colors[second].wcagLum - colors[first].wcagLum)
    ).indexOf(rowId)

  );

  // ===== Return ===== //
  return (
    <Row
      isPending={willChangeOrder}
      i={i}
    >

      {/* ===== Color delete button ===== */}
      <div className='row__group row__group--button'>
        <Button
          onClick={() => { deleteColor(rowId); }}
          // Disable the delete button if there is only 1 color
          disabled={sortedColorList.length === 1}
        >
          <Dismiss16Filled
            className='button__icon'
            alt={texts[displayLanguage].deleteColor}
          />
        </Button>
      </div>

      {/* ===== Display index+1 ===== */}
      <div className='row__group row__group--number'>
        <p>
          {i + 1}
          .
        </p>
      </div>

      {/* ===== RGB ===== */}
      <div className='row__group row__group--triple'>
        {
          // Iterating over rgb to create an input for each of them
          Object.keys(rgb).map((key) => (
            <Input
              key={key}
              type='number'
              step='1'
              name={key}
              unit='rgb'
              value={rgb[key]}
              rowId={rowId}
              updateIndex={updateIndex}
              modifyColor={modifyColor}
              updateCurrentColor={updateCurrentColor}
            />
          ))
        }

      </div>

      {/* ===== HSL ===== */}
      <div className='row__group row__group--triple'>

        {
          // Iterating over hsl to create an input for each of them
          Object.keys(hsl).map((key) => (
            <Input
              key={key}
              type='number'
              step={((key === 'h') ? 1 : 0.01) /* for S & L, increment needs to be 0.01 */}
              name={key}
              unit='hsl'
              value={hsl[key]}
              rowId={rowId}
              updateIndex={updateIndex}
              modifyColor={modifyColor}
              updateCurrentColor={updateCurrentColor}
            />
          ))
        }
      </div>

      {/* ===== HEX ===== */}
      <div className='row__group row__group--wide'>

        <Input
          type='string'
          name='hex'
          unit='hex'
          value={hex.hex}
          rowId={rowId}
          updateIndex={updateIndex}
          modifyColor={modifyColor}
          updateCurrentColor={updateCurrentColor}
        />

      </div>

      {/* ===== WCAG relative luminance ===== */}
      <div className='row__group row__group--wide'>
        <p>{wcagLum.toFixed(4)}</p>
      </div>

      {/* ===== Preview color ===== */}
      <div className='row__group'>
        <div
          className='cell__circle'
          style={{
            backgroundColor : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
          }}
        />
      </div>

      {/* ===== WCAG contrast matrix ===== */}
      <div className='row__group'>
        {
          // Iterating over columnId in sortedColorList to create a cell for each of them
          sortedColorList.map((columnId) => (
            <WcagCell
              key={columnId}
              texts={texts}
              colors={colors}
              previewSelection={previewSelection}
              rowId={rowId}
              columnId={columnId}
              currentColor={currentColor}
              changePreview={changePreview}
              sortedColorList={sortedColorList}
              displayLanguage={displayLanguage}
              isWcagLarge={isWcagLarge}
            />
          ))
        }
      </div>
    </Row>
  );
};

export default connectComponent(RowColor);