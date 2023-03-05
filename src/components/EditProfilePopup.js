import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="username"
      title="Редактировать профиль"
      subtitle="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_username"
          id="author-input"
          type="text"
          name="username"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error author-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_about-me"
          id="about-me-input"
          type="text"
          name="job"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error about-me-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
