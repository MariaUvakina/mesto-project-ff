import "./pages/index.css";
import {
    createCard,
    deleteCard,
    likeCardButton,
} from "./components/card.js";
import { initialCards } from "./components/cards.js";
import { openPopup, closePopupbyOverlay } from "./components/modal.js";

// DOM узлы
const cardsContainer = document.querySelector(".places__list");
const profileEditButton = document.querySelector(".profile__edit-button");
const newCardButton = document.querySelector(".profile__add-button");
const popups = document.querySelectorAll(".popup");
const profileEditPopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = document.querySelector(".popup__input_type_name");
const profileDescriptionInput = document.querySelector(
    ".popup__input_type_description"
);
const profileEditForm = profileEditPopup.querySelector(".popup__form");
const newCardForm = newCardPopup.querySelector(".popup__form");
const newCardNameInput = newCardForm.querySelector(
    ".popup__input_type_card-name"
);
const newCardLinkInput = newCardForm.querySelector(".popup__input_type_url");

//вывести карточки на страницу
initialCards.forEach(function (item) {
    const newCard = createCard(
        item.name,
        item.link,
        deleteCard,
        handleImageClick,
        likeCardButton
    );
    cardsContainer.append(newCard);
});

//обработчики события открытия попапов
profileEditButton.addEventListener("click", () => {
    openPopup(profileEditPopup);
    fillProfileInputs();
});
newCardButton.addEventListener("click", () => {
    openPopup(newCardPopup);
});

//обработчики события отправки сабмитов
profileEditForm.addEventListener("submit", handleFormEditSubmit);
newCardForm.addEventListener("submit", handleFormNewCardSubmit);

//обработчик события закрытия попапа
popups.forEach((popup) => popup.addEventListener("mousedown", closePopupbyOverlay));

//функция отправки формы редактирования
function handleFormEditSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
}

//функция отправки формы создания новой карточки
function handleFormNewCardSubmit(evt) {
    evt.preventDefault();
    const newCard = createCard(
        newCardNameInput.value,
        newCardLinkInput.value,
        deleteCard,
        handleImageClick,
        likeCardButton
    );
    cardsContainer.prepend(newCard);
    newCardForm.reset();
}

//функция автозаполнения полей для попапа редактирования
function fillProfileInputs() {
    profileNameInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
}

//функция открытия попапа карточки по клику на картинку
function handleImageClick(evt) {
    const imgPopup = imagePopup.querySelector(".popup__image");
    const captionPopup = imagePopup.querySelector(".popup__caption");
    imgPopup.src = evt.target.src;
    imgPopup.alt = evt.target.alt;
    captionPopup.textContent = evt.target.alt;
    openPopup(imagePopup);
}
