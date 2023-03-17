import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, onLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [userInfoValues, setUserInfoValues] = useState({});

  useEffect(() => {
    setUserInfoValues(currentUser);
  }, [currentUser]);
  
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUserInfoValues({
      ...userInfoValues,
      [name]: value,
    });
  }



  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: userInfoValues.name,
      about: userInfoValues.about,
    });
  }

  return (
    <PopupWithForm
      name="username" //проверить эту строчку
      title="Редактировать профиль"
      subtitle="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onLoading={onLoading}
    >
      <label className="popup__field">
        <input
          onChange={handleChange}
          className="popup__input popup__input_type_username"
          id="name"
          type="text"
          name="name"
          placeholder="Имя"
          value={userInfoValues.name}
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error author-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          onChange={handleChange}
          className="popup__input popup__input_type_about-me"
          id="about"
          type="text"
          name="about"
          placeholder="О себе"
          value={userInfoValues.about}
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
