import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(card) {
    const currentUser = React.useContext(CurrentUserContext)
    const isOwn = card.owner_id === currentUser._id
    const isLiked = card.likes.some(i => i._id === currentUser._id)
    const cardLikeButtonClassName = ( 
        `elements__like-button ${isLiked && 'elements__like-button_active'}` 
      );

    function handleCardClick() {
        card.onCardClick(card);
    }

    return (
        <li className="elements__element">
            {isOwn && <button className="elements__delete-button elements__delete-button_hidden" type="button" aria-label="Удалить" />}
            <img className="elements__photo" src={card.link} alt={card.name} onClick={handleCardClick} />
            <div className="elements__info">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__likes">
                    <button className="elements__like-button" type="button" aria-label="Оценить" />
                    <p className="elements__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card