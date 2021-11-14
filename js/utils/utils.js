// Функция, проверяющая нажатую клавишу 'Esc'

export const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

// Функция, рендера

export const renderElement = (el, container, position = 'beforeend') => {
  container.insertAdjacentHTML(position, el);
};
