const GET_DATA_URL = 'https://24.javascript.pages.academy/keksobooking/data';
const SEND_DATA_URL = 'https://24.javascript.pages.academy/keksobooking';

export const getData = (getSuccessHandler, getErrorHandler) => {
  fetch(GET_DATA_URL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error();
    })
    .then((data) => {
      getSuccessHandler(data);
    })
    .catch(() => {
      getErrorHandler();
    });
};

export const sendData = (sendSuccessHandler, sendErrorHandler, body) => {
  fetch(SEND_DATA_URL,
    {
      method: 'POST',
      body,
    },
  ).then((res) => {
    if(!res.ok) {
      throw new Error();
    }
  })
    .then(() => {
      sendSuccessHandler();
    })
    .catch(() => {
      sendErrorHandler();
    });
};
