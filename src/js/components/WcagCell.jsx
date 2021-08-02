import React from 'react';

import { Dismiss24Filled, Question24Filled, Checkmark24Filled } from '@fluentui/react-icons';

import { calcWcagContrast, judgeWcagContrast } from '../helpers/colorConversion';
// ===== End of imports ===== //

const WcagCell = (props) => {
  // ===== PROPS ===== //
  const {
    texts,
    colors,
    previewSelection,
    rowId,
    columnId,
    currentColor,
    changePreview,
    sortedColorList,
    displayLanguage,
    isWcagLarge
  } = props;

  // ===== Calculating the rounding of corner ===== //
  let corner = '';
  // Check for top
  // isTop is saved in a variable, because it is also used to display the circular color preview too
  const isTop = sortedColorList[0] === rowId;
  corner = (isTop ? `${corner} cell__button--top` : corner);
  // Check for bottom
  corner = (sortedColorList[sortedColorList.length - 1] === rowId ? `${corner} cell__button--bottom` : corner);
  // Checking for left
  corner = (sortedColorList[0] === columnId ? `${corner} cell__button--left` : corner);
  // Check for right
  corner = (sortedColorList[sortedColorList.length - 1] === columnId ? `${corner} cell__button--right` : corner);

  // ===== Check if the cell is curerntly selected ===== //
  const isSelected = (rowId === previewSelection.color1 && columnId === previewSelection.color2);

  // ===== Calculate & judge the contrast ===== //
  const contrast = calcWcagContrast(colors[columnId].wcagLum, colors[rowId].wcagLum);
  const status = judgeWcagContrast(contrast, isWcagLarge);

  // ===== Compute the appropriate class & icon filename for the contrast status ===== //
  let statusClass; let
    Icon;

  switch (status) {
  case 'contrastPass':
    statusClass = ' cell__button--pass';
    Icon = Checkmark24Filled;
    break;
  case 'contrastCaution':
    statusClass = ' cell__button--caution';
    Icon = Question24Filled;
    break;
  case 'contrastFail':
    statusClass = ' cell__button--fail';
    Icon = Dismiss24Filled;
    break;
  default:
    statusClass = '';
  }

  // ===== Compute the appropriate class for row/column highlighting based on currentColor ===== //
  let currentClass = '';
  if (currentColor === rowId) {
    currentClass = ' cell__button--current-horizontal';
  }
  if (currentColor === columnId) {
    currentClass += ' cell__button--current-vertical';
  }

  // ===== Return ===== //
  return (
    <>
      <div className='cell'>
        {/* Circular color display for top-most row */
          (isTop ? (
            <div
              className='cell__circle cell__circle--horizontal'
              style={{
                backgroundColor : `rgb(${colors[columnId].rgb.r}, ${colors[columnId].rgb.g}, ${colors[columnId].rgb.b})`
              }}
            />
          ) : '')
        }

        {/* ===== Cell itself for WCAG contrast matrix (inner) ===== */

          (rowId === columnId) ? (
            // Case where color was compared against itself
            <div className='cell__content'>
              <p>N/A</p>
            </div>
          ) : (
          // Case where color was compared against another color

            <div className='cell__content'>
              <Icon
                alt={texts[displayLanguage][status]}
                className='cell__icon'
              />

              <p>{contrast.toFixed(2)}</p>
            </div>
          )
        }
        {/* ===== Cell itself for WCAG contrast matrix (outer) ===== */

          (rowId === columnId) ? (
            // Case where color was compared against itself
            <button
              type='button'
              className={
                `cell__button
                  ${corner}
                  ${currentClass}`
              }
              disabled
              aria-label={texts[displayLanguage].previewAlt}
            />
          ) : (
            // Case where color was compared against another color
            <button
              type='button'
              className={
                `cell__button cell__button--valid
                ${(isSelected ? ' cell__button--selected' : '')}
                ${corner}
                ${statusClass}
                ${currentClass}`
              }
              onClick={() => (changePreview(rowId, columnId))}
              aria-label={texts[displayLanguage].previewAlt}
            />
          )
        }
      </div>
    </>

  );
};

export default WcagCell;