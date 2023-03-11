import React from 'react';
import '../App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({})
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
        onCardClick={setSelectedCard}
      />
      <Footer />

      {/* <!-- Окно редактирования информации пользователя --> */}
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input className="popup__input popup__input_type_name" id="input-name" placeholder="Введите имя" name="name" minLength="2" maxLength="40" type="text" required />
        <span id="input-name-error" className="popup__error-hint" />
        <input className="popup__input popup__input_type_brief" id="input-brief" placeholder="Опишите себя" name="brief" minLength="2" maxLength="200" type="text" required />
        <span id="input-brief-error" className="popup__error-hint" />
      </PopupWithForm>

      {/* <!-- Окно добавления фотографий --> */}
      <PopupWithForm
        name="add-photos"
        title="Новое место"
        buttonText="Добавить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input className="popup__input popup__input_type_photo-title" placeholder="Введите название места" name="name" id="mesto-name" minLength="2" maxLength="30" type="text" required />
        <span className="popup__error-hint" id="mesto-name-error" />
        <input className="popup__input popup__input_type_photo-link" placeholder="Ссылка на фотографию" name="link" id="mesto-link" type="url" required />
        <span className="popup__error-hint" id="mesto-link-error" />
      </PopupWithForm>

      {/* <!-- Окно редактирования аватара пользователя --> */}
      <PopupWithForm
        name="edit-profile-avatar"
        title="Обновить аватар"
        buttonText="Обновить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input className="popup__input popup__input_type_photo-link" placeholder="Ссылка на фотографию" name="avatar" id="avatar-link" type="url" required />
        <span className="popup__error-hint" id="avatar-link-error" />
      </PopupWithForm>

      {/* <!-- Окно с полноэкранным режимом фотографий --> */}
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      {/* <!-- Окно подтверждения удаления фотографии --> */}
      <PopupWithForm
        name="delete-confirmation"
        title="Вы точно хотите удалить?"
        buttonText="Да"
      />

    </div>
  );
}

export default App;
