//функция открытия попапа
function openPopup(popup) {
    popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", handleEscape);
}

//функция закрытия попапа
function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", handleEscape);
}

//функция закрытия попапов через Escape
function handleEscape(evt) {
    if (evt.key === "Escape") {
        const popupOpened = document.querySelector(".popup_is-opened");
        closePopup(popupOpened);
    }
}

//функция закрытия попапов по оверлею
function closePopupbyOverlay(evt){
    if (evt.target.classList.contains("popup_is-opened") || evt.target.classList.contains("popup__close")) {
        closePopup(evt.currentTarget);
    }
};


export { openPopup, closePopupbyOverlay };
