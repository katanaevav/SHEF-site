const SHOW_TIME = 3000;


export const popup = (message) => {
  const popupContainer = document.createElement(`div`);

  document.body.querySelector(`.site-container`).append(popupContainer);
  popupContainer.classList.add(`error_message`);

  const messageContainer = document.createElement(`p`);

  popupContainer.append(messageContainer);
  messageContainer.classList.add(`error_message__text`);

  messageContainer.textContent = message;


  setTimeout(() => {
    popupContainer.textContent = ``;
  }, SHOW_TIME);
};
