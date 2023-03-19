import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
    const [cards, setCards] = React.useState([]);

    const currentUser = React.useContext(CurrentUserContext)

    React.useEffect(() => {
        api.getInitialCardSet()
            .then((cardList) => {
                setCards(cardList.map((card) => ({
                    name: card.name,
                    link: card.link,
                    likes: card.likes,
                    id: card._id,
                    owner_id: card.owner._id
                })))
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={currentUser.avatar} alt="Ваш аватар" />
                    <button className="profile__edit-avatar-button" onClick={() => { props.onEditAvatar(true) }} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button" id="btn-show-edit-profile-form" type="button" aria-label="Редактировать профиль" name="EditProfile" onClick={() => { props.onEditProfile(true) }} />
                    <p className="profile__brief">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" id="btn-show-add-photos-form" type="button" aria-label="Добавить" name="AddPhotos" onClick={() => { props.onAddPlace(true) }} />
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card
                            name={card.name}
                            link={card.link}
                            likes={card.likes}
                            key={card.id}
                            onCardClick={props.onCardClick}
                            owner_id={card.owner_id}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main