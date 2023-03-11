import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setUserName(userData.name)
                setUserDescription(userData.about)
                setUserAvatar(userData.avatar)
            })
            .catch((err) => console.log(err))

        api.getInitialCardSet()
            .then((cardList) => {
                setCards(cardList.map((card) => ({
                    name: card.name,
                    link: card.link,
                    likes: card.likes,
                    id: card._id
                })))
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={userAvatar} alt="Ваш аватар" />
                    <button className="profile__edit-avatar-button" onClick={() => { props.onEditAvatar(true) }} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" id="btn-show-edit-profile-form" type="button" aria-label="Редактировать профиль" name="EditProfile" onClick={() => { props.onEditProfile(true) }} />
                    <p className="profile__brief">{userDescription}</p>
                </div>
                <button className="profile__add-button" id="btn-show-add-photos-form" type="button" aria-label="Добавить" name="AddPhotos" onClick={() => { props.onAddPlace(true) }} />
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card
                            name={card.name}
                            link={card.link}
                            likes={card.likes.length}
                            key={card.id}
                            onCardClick={props.onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main