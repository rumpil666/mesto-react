import React from "react";

function PopupWithForm({ name, title, subtitle, isOpen, onClose, children }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close"
          type="button"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form form" name={`${name}`} noValidate>
          {children}
          <button className="popup__submit button" type="submit">
            {subtitle}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
