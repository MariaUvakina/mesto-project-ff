// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template");

// @todo: DOM узлы
const cardsContainer = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(name, link, handleDelete) {
    const cardElement = cardTemplate.content.cloneNode(true);
    const deleteButton = cardElement.querySelector(".card__delete-button");
    cardElement.querySelector(".card__image").src = link;
    cardElement.querySelector(".card__image").alt = name;
    cardElement.querySelector(".card__title").textContent = name;
    deleteButton.addEventListener("click", (event) => handleDelete(event));
    return cardElement;
}

// @todo: Функция удаления карточки
function handleDelete() {
    const deleteCard = event.target.closest(".card");
    deleteCard.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
    cardsContainer.append(createCard(item.name, item.link, handleDelete));
});
