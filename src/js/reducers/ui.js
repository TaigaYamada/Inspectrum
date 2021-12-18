// State is given empty initial value
const uiReducer = (state = {}, action) => {
  // Main switch
  switch (action.type) {
  // ===== Action to change selected preview color combination ===== //
  // Arguements:
  // colorId1: String
  // colorId2: String
  case 'CHANGE_PREVIEW':
    return {
      ...state,
      previewSelection : {
        color1 : action.colorId1,
        color2 : action.colorId2
      }
    };

  // ===== Action to track currently edited color ===== //
  // Arguements:
  // colorId: String
  case 'UPDATE_CURRENT_COLOR':
    return {
      ...state,
      currentColor : action.colorId
    };

  // ===== Action to update display language ===== //
  // Arguements:
  // language: String
  case 'UPDATE_DISPLAY_LANGUAGE':
    return {
      ...state,
      displayLanguage : action.language
    };

  // ===== Action to change modal state ===== //
  case 'CHANGE_MODAL_STATE':
    return {
      ...state,
      modalState : action.modalState
    };

  // ===== Action to toggle between large/small font size for WCAG checks ===== //
  case 'TOGGLE_WCAG_MODE':
    return {
      ...state,
      isWcagLarge : !state.isWcagLarge
    };

  // ===== Action to toggle display of preview pane ===== //
  case 'TOGGLE_PREVIEW':
    return {
      ...state,
      isPreviewOn : !state.isPreviewOn
    };

  // If no match, don't do anything
  default:
    return state;
  }
};

export default uiReducer;