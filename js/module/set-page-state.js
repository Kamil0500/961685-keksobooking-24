const forms = document.querySelectorAll('form');

const setElementDisabledState = (form) => {
  form.querySelectorAll('form select, input, button, textarea').forEach((item) => item.disabled = true);
};

const setElementEnabledState = (form) => {
  form.querySelectorAll('form select, input, button, textarea').forEach((item) => item.disabled = false);
};

export const setDisabledFormState = () => {
  forms.forEach((form) => {
    form.classList.add('disabled');
    setElementDisabledState(form);
  });
};

export const setEnabledFormState = (form) => {
  form.classList.remove('disabled');
  setElementEnabledState(form);
};
