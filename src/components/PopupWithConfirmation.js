import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupWithConfirmation({}) {
  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      subtitle="Сохранить"
    ></PopupWithForm>
  );
}
export default PopupWithConfirmation;
