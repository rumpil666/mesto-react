import React from "react";

function Card({ onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="element">
      <button
        className="element__delete"
        type="button"
        aria-label="Удалить"
      ></button>
      <img
        onClick={handleClick}
        className="element__item"
        src={card.link}
        alt={card.name}
      />
      <div className="element__group">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button
            className="element__like"
            type="button"
            aria-label="Нравится"
          ></button>
          <span className="element__likes-number">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
