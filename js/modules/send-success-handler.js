import {isEscEvent, renderElement} from '../utils/utils.js';
import {setPinMarkerStartState} from './map.js';
import {resetAddForm} from './activate-ad-form.js';

const forms = document.querySelectorAll('form');

const createSuccessMarkup = () => `<div class="success">
                                    <p class="success__message">Ваше объявление<br>успешно размещено!</p>
                                  </div>`;

const successBlockClickHandler = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.success')) {
    closeSuccessBlock();
  }
};

const documentKeydownHandler = (evt) => {
  evt.preventDefault();
  if (isEscEvent(evt)) {
    closeSuccessBlock();
  }
};

const addListeners = () => {
  document.addEventListener('click', successBlockClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};

function closeSuccessBlock() {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', documentKeydownHandler);
  document.removeEventListener('click', successBlockClickHandler);
}

export const sendSuccessHandler = () => {
  renderElement(createSuccessMarkup(), document.body);
  addListeners();
  forms.forEach((form) => form.reset());
  resetAddForm();
  setPinMarkerStartState();
};
