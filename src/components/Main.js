import React from "react";
import avatar from "../images/profile/avatar.jpg"

function Main() {
    return (
    <main class="content">
        <section class="profile">
            <div class="profile__avatar-container">
                <img class="profile__avatar" src={avatar} alt="Ваш аватар" />
                <button class="profile__edit-avatar-button"onClick={handleEditAvatarClick}></button>
            </div>
            <div class="profile__info">
                <h1 class="profile__name">Жак-Ив Кусто</h1>
                <button class="profile__edit-button" id="btn-show-edit-profile-form" type="button" aria-label="Редактировать профиль" name="EditProfile" onClick={handleEditProfileClick}></button>
                <p class="profile__brief">Исследователь океана</p>
            </div>
            <button class="profile__add-button" id="btn-show-add-photos-form" type="button" aria-label="Добавить" name="AddPhotos" onClick={handleAddPlaceClick}></button>
        </section>
        <section class="elements">
            <ul class="elements__list"></ul>
        </section>
    </main>
    )
}

export default Main