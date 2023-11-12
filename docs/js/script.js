console.log('js rabotaet!');

const btnSend = document.querySelector('.button_send');
const inputMessage = document.querySelector('.post-form__input-message');
const inputName = document.querySelector('.post-form__input-name');
const postList = document.querySelector('.post__list');
const userList = document.querySelector('.user__list');

btnSend.addEventListener('click', sendFunction);

function sendFunction() {
  const inputMessageValue = inputMessage.value;
  const inputNameValue = inputName.value;

  const newListElementMessage = document.createElement('li');
  newListElementMessage.classList.add('post__item');
  newListElementMessage.innerText = inputMessageValue;

  const removeListElement = document.createElement('button');
  removeListElement.innerText = 'Удалить';
  removeListElement.classList.add('button__remove');
  removeListElement.addEventListener('click', () => {
    newListElementMessage.remove();
    newListElementName.remove();
  });

  const newListElementName = document.createElement('li');
  newListElementName.classList.add('user__item');
  newListElementName.innerText = inputNameValue;

  newListElementMessage.append(removeListElement);
  postList.append(newListElementMessage);
  userList.append(newListElementName);
}

document.addEventListener('DOMContentLoaded', function () {
  alert('Страница полностью загружена');
  // или console.log("Страница полностью загружена");
});
