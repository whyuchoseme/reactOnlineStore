export const getStorageItem = (itemKey) => localStorage.getItem(itemKey);

export const setStorageItem = (itemKey, itemValue) =>
  localStorage.setItem(itemKey, itemValue);
