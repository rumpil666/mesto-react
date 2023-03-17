import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, onLoading }) {
  const [cardValues, setCardValues] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setCardValues({
      ...cardValues,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    onAddPlace({
      name: cardValues.title,
      link: cardValues.link,
    });
  } 
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="card"
      title="Новое место"
      subtitle="Создать"
      onSubmit={handleSubmit}
      onLoading={onLoading}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_title"
          id="title"
          type="text"
          name="title"
          placeholder="Название"
          required
          minLength="2"
          maxLength="40"
          value={cardValues.title}
          onChange={handleChange}
        />
        <span className="popup__input-error name-image-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_link"
          id="link"
          type="url"
          name="link"
          placeholder="Ссылка на изображение"
          required
          value={cardValues.link}
          onChange={handleChange}
        />
        <span className="popup__input-error url-image-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
