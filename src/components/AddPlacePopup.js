import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {
    return(
        <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        name="card"
        title="Новое место"
        >
          <label className="popup__field">
            <input className="popup__input popup__input_type_title" id="name-image-input" type="text" name="name" placeholder="Название"
              required minLength="2" maxLength="40" />
            <span className="popup__input-error name-image-input-error"></span>
          </label>
          <label className="popup__field">
            <input className="popup__input popup__input_type_link" id="url-image-input" type="url" name="link"
              placeholder="Ссылка на изображение" required />
            <span className="popup__input-error url-image-input-error"></span>
          </label>
          <button className="popup__submit button" type="submit">Создать</button>
        </PopupWithForm> 
    )
}
export default AddPlacePopup;