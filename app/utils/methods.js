export const isValidObjField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};

export const updateError = (errorMessage, stateUpdater) => {
  stateUpdater(errorMessage);
  setTimeout(() => {
    stateUpdater("");
  }, 3000);
};

export const isValidEmail = (email) => {
  const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regex.test(email);
};
