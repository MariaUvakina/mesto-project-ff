import { cardTemplate } from "./cards.js";

//функция создания карточки
function createCard(name, link, deleteCard, handleImageClick, likeCardButton) {
    const cardElement = cardTemplate.content.cloneNode(true);
    const cardImg = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
  
    //значения элементов карточки
    cardTitle.textContent = name;
    cardImg.src = link;
    cardImg.alt = name;
  
    //удаление карточки по клику
    const buttonCardDelete = cardElement.querySelector(".card__delete-button");
    buttonCardDelete.addEventListener("click", (event) => deleteCard(event));
  
    //открытие попапа карточки по клику на картинку
    cardImg.addEventListener("click", handleImageClick);
  
    //обработчик события лайка карточки по клику
    const buttonCardLike = cardElement.querySelector(".card__like-button");
    buttonCardLike.addEventListener("click", () => {
      likeCardButton(buttonCardLike);
    });
  
    return cardElement;
  }
  
  //функция удаления карточки
  function deleteCard(evt) {
    evt.target.closest(".card").remove();
  }
  
  //функция лайка карточки
  function likeCardButton(buttonCardLike) {
    buttonCardLike.classList.toggle("card__like-button_is-active");
  }
  
  export { createCard, deleteCard, likeCardButton };