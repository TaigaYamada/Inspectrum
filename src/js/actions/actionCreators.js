// === Color-related actions === //

// Add a color
export const addColor = () => ({
  type : 'ADD_COLOR'
});

// Modify a color
export const modifyColor = (colorId, newValue, inputType) => ({
  type : 'MODIFY_COLOR',
  colorId,
  newValue,
  inputType
});

// Delete a color
export const deleteColor = (colorId) => ({
  type : 'DELETE_COLOR',
  colorId
});

// Update the index
export const updateIndex = () => ({
  type : 'UPDATE_INDEX'
});

// Change the color combination for preview
export const changePreview = (colorId1, colorId2) => ({
  type : 'CHANGE_PREVIEW',
  colorId1,
  colorId2
});

// Track the currently edited color
export const updateCurrentColor = (colorId) => ({
  type : 'UPDATE_CURRENT_COLOR',
  colorId
});

// Change the display language
export const updateDisplayLanguage = (language) => ({
  type : 'UPDATE_DISPLAY_LANGUAGE',
  language
});

// Change the modal state
export const changeModalState = (modalState) => ({
  type : 'CHANGE_MODAL_STATE',
  modalState
});

// Toggle whether WCAG contrast is checked for large/small text
export const toggleWcagMode = () => ({
  type : 'TOGGLE_WCAG_MODE'
});

// Toggle display of the preview
export const togglePreview = () => ({
  type : 'TOGGLE_PREVIEW'
});
