import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupWithConfirmation({}) {
    return(
        <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        >
          <button className="popup__submit button" type="submit">Да</button>
        </PopupWithForm>
    )
}
export default PopupWithConfirmation;