import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import PopupWithConfirmation from "./PopupWithConfirmation";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);


  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
    <>
    <Header />
    <Main 
    onEditProfile={handleEditProfileClick}
    onAddPlace={handleAddPlaceClick}
    onEditAvatar={handleEditAvatarClick}
    onCardClick={handleCardClick}
    />
    <Footer />

    <EditProfilePopup
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    />

    <AddPlacePopup
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    />

    <EditAvatarPopup
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    />

    <PopupWithConfirmation />
  
    <ImagePopup 
    card={selectedCard}
    onClose={closeAllPopups}
    />
    </>
  
  </div>
  );
}

export default App;
