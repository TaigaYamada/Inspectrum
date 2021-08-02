// React imports
import React, { useEffect } from 'react';

// Component imports
import HeadingRow from './HeadingRow';
import RowColor from './RowColor';
import RowAddColor from './RowAddColor';
import Preview from './Preview';
import ConfigBar from './ConfigBar';
import Modal from './Modal';

// ===== End of imports ===== //

// ==== Defining the default app ===== //
const App = (props) => {
  // Assigning props to variables
  const {
    colors,
    ui,
    addColor,
    updateDisplayLanguage,
    changeModalState,
    toggleWcagMode
  } = props;

  // Assigning the sortedColorList for the first time
  const sortedColorList = Object.keys(colors).sort(
    (first, second) => (colors[second].index - colors[first].index)
  );

  // UseEffect hook to contain the unwieldy absolute-position rows
  useEffect(() => {
    // Setting the width
    document.getElementById('container').style.width = `calc(10vw + ${document.getElementById('container').childNodes[1].getBoundingClientRect().width / 10 + 0.8}rem)`;

    // setting the height
    document.getElementById('container').style.height = `${7 * (sortedColorList.length + 1) + 20}rem`;

    // Sorting the sortedColorList again
    sortedColorList.sort(
      (first, second) => (colors[second].index - colors[first].index)
    );
  });

  return (
    <>
      <Modal
        displayLanguage={ui.displayLanguage}
        modalState={ui.modalState}
        changeModalState={changeModalState}
      />
      <ConfigBar
        displayLanguage={ui.displayLanguage}
        updateDisplayLanguage={updateDisplayLanguage}
        changeModalState={changeModalState}
        toggleWcagMode={toggleWcagMode}
      />
      {/* This is to somewhat center the rows */}
      <div className='container'>
        <div className='container__outer'>
          <ul
            id='container'
            className='container__inner'
          >
            <HeadingRow
              displayLanguage={ui.displayLanguage}
              changeModalState={changeModalState}
            />

            {
              // Looping over the color prop to generate a row for each one of them
              // Orders the Rows based on the index in the store
              sortedColorList.map((color, i) => (
                <RowColor
                  key={color}
                  rowId={color}
                  sortedColorList={sortedColorList}
                  i={i}
                />
              ))
            }

            <RowAddColor
              i={sortedColorList.length}
              addColor={addColor}
              displayLanguage={ui.displayLanguage}
            />

          </ul>

        </div>
      </div>

      {/* Color combination preview */}

      <Preview
        colors={colors}
        previewSelection={ui.previewSelection}
        displayLanguage={ui.displayLanguage}
      />
    </>
  );
};

export default App;