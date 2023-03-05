import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {
    return(
        <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isOpen}
        onClose={onClose}
        >
          <label className="popup__field">
            <input className="popup__input popup__input_type_link" id="url-avatar-input" type="url" name="avatar"
              placeholder="Ссылка на аватар" required />
            <span className="popup__input-error url-avatar-input-error"></span>
          </label>
          <button className="popup__submit button" type="submit">Сохранить</button>
        </PopupWithForm>  
    )
}
export default EditAvatarPopup;