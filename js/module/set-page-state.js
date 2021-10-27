const forms = document.querySelectorAll('form');

const setElementDisabled = (form) => {
  form.querySelectorAll('form select, input, button, textarea').forEach((item) => item.disabled = true);
};

const setElementEnabled = (form) => {
  form.querySelectorAll('form select, input, button, textarea').forEach((item) => item.disabled = false);
};

export const setDisabledForm = () => {
  forms.forEach((form) => {
    form.classList.add('ad-form--disabled');
    setElementDisabled(form);
  });
};

export const setEnabledForm = (form) => {
  form.classList.remove('ad-form--disabled');
  setElementEnabled(form);
};
