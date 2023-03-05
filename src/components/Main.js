import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([initialCards, userData]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards(initialCards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);
    return(
    <main className="content page__content">
  
    <section className="profile">
      <div className="profile__info">
        <img className="profile__avatar" src={userAvatar} alt="Аватарка" />
        <button onClick={onEditAvatar} className="profile__avatar-btn"></button>
        <div className="profile__grid">
          <h1 className="profile__name">{userName}</h1>
          <button onClick={onEditProfile} className="profile__edit-button" aria-label="Открыть" type="button"></button>
          <p className="profile__about-me">{userDescription}</p>
        </div>
      </div>
      <button onClick={onAddPlace} type="button" className="profile__add-button button" aria-label="Открыть"></button>
    </section>

    <section className="elements" aria-label="Карточки с интересными местами в России">
      <div className="elements__list">
        {cards.map(card => {
          return(
            <Card
            onCardClick={onCardClick}
            key={card._id}
            card={card}
            />
          )
        })}
      </div>
    </section>

  </main>
  );
}

export default Main;