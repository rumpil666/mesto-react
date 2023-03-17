import React from "react";

function PopupWithForm({ name, title, subtitle, isOpen, onClose, children, onSubmit, onLoading }) {
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
        <form className="popup__form form" name={`${name}`} noValidate onSubmit={onSubmit}>
          {children}
          <button className="popup__submit button" type="submit">
            {onLoading ? "Сохранение..." : subtitle}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
