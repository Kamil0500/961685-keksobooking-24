const formElement = document.querySelector('.ad-form');
const mapFilterElement = document.querySelector('.map__filters');

export const disabledFormElements = () => {
  formElement.classList.add('ad-form--disabled');
  mapFilterElement.classList.add('map__filters--disabled');
  const interactiveFormElement = formElement.querySelectorAll('fieldset');
  interactiveFormElement.forEach((interactiveElement) => {
    interactiveElement.disabled = true;
  });
};

const enabledForm = () => {
  formElement.classList.remove('ad-form--disabled');
  const interactiveFormElement = formElement.querySelectorAll('fieldset');
  interactiveFormElement.forEach((interactiveElement) => {
    interactiveElement.disabled = false;
  });
};

const enableMapFilter = () => {
  mapFilterElement.classList.remove('map__filters--disabled');
};

export const enableFormElements = () => {
  enabledForm();
  enableMapFilter();
};
