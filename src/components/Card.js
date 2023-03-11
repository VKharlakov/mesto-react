import React from "react";

function Card(card) {
    
    function handleCardClick() {
        card.onCardClick(card);
    } 

    return (
    <li className="elements__element" onClick={handleCardClick}>
        <button className="elements__delete-button elements__delete-button_hidden" type="button" aria-label="Удалить"/>
        <img className="elements__photo" src={card.link} alt={card.name} />
        <div className="elements__info">
            <h2 className="elements__title">{card.name}</h2>
            <div className="elements__likes">
                <button className="elements__like-button" type="button" aria-label="Оценить"/>
                <p className="elements__like-count">{card.likes}</p>
            </div>
        </div>
    </li>
    )
}

export default Card