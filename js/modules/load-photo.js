const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'webp'];
const BASE_AVATAR_SRC = 'img/muffin-grey.svg';
const avatarChooserInput = document.querySelector('.ad-form-header__input');
const photoChooserInput = document.querySelector('.ad-form__input');
const photoContainer = document.querySelector('.ad-form__photo');
const previewImg = document.querySelector('.ad-form-header__preview img');

let img;

const loadChangeHandler = (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const result = reader.result;
      switch (evt.target) {
        case avatarChooserInput:
          previewImg.src = result;
          break;
        case photoChooserInput:
          if (!img) {
            img = document.createElement('img');
            img.src = result;
            photoContainer.appendChild(img);
            break;
          }
          img.src = result;
          break;
        default:
          break;
      }
    });
    reader.readAsDataURL(file);
  }
};

export const clearImgBlocks = () => {
  previewImg.src = BASE_AVATAR_SRC;
  photoContainer.innerHTML = '';
};

export const addChooserInputsListeners = () => {
  avatarChooserInput.addEventListener('change', loadChangeHandler);
  photoChooserInput.addEventListener('change', loadChangeHandler);
};
