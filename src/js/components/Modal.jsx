import React, { useRef } from 'react';

import { Dismiss16Filled } from '@fluentui/react-icons';
import texts from '../data/texts';

import Button from './Button';

// ===== End of imports ===== //

const Modal = (props) => {
  const {
    displayLanguage,
    modalState,
    changeModalState
  } = props;

  // useRef to check that the modal was clicked, NOT the modal__container
  const modalRef = useRef(null);

  let displayContent;

  // displayContent will ALWAYS be in English for License, because I cannot translate a legal text
  if (modalState === 'license') {
    displayContent = texts.en.modalContent[modalState];
  } else {
    displayContent = texts[displayLanguage].modalContent[modalState];
  }

  return (
    modalState !== 'hidden'
      ? (
        <div
          className='modal'
          role='button'
          onClick={({ target }) => { if (target === modalRef.current) { changeModalState('hidden'); } }}
          ref={modalRef}
          onKeyDown={({ key }) => {
            if (key === 'Escape') { changeModalState('hidden'); }
          }}
          tabIndex={-1}
        >
          <div className='modal__container'>
            <div className='modal__scroll'>
              <Button
                onClick={() => { changeModalState('hidden'); }}
                isCorner
              >
                <Dismiss16Filled
                  alt={texts[displayLanguage].closeModalAlt}
                  className='button__icon'
                />

              </Button>

              <h2>
                {displayContent.title}
              </h2>
              <p>{displayContent.text}</p>
              {displayContent.sections ? displayContent.sections.map((section) => (
                <section key={section.title}>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </section>
              )) : ''}
            </div>
          </div>
        </div>
      )

      : ''

  );
};
export default Modal;