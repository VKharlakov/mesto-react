import '../App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <body class="page">
      <Header />
      <Main />
      <Footer />

      {/* <!-- Окно редактирования информации пользователя --> */}
      <div class="popup popup_type_edit-profile" id="edit-profile">
        <button class="popup__btn-close" type="button" aria-label="Закрыть"></button>
        <div class="popup__container">
          <h2 class="popup__title">Редактировать профиль</h2>
          <form class="popup__form" id="edit-profile-form" name="form" novalidate>
            <input class="popup__input popup__input_type_name" id="input-name" placeholder="Введите имя" name="name" minlength="2" maxlength="40" type="text" required />
            <span id="input-name-error" class="popup__error-hint"></span>
            <input class="popup__input popup__input_type_brief" id="input-brief"placeholder="Опишите себя" name="brief" minlength="2" maxlength="200" type="text" required />
            <span id="input-brief-error" class="popup__error-hint"></span>
            <button class="popup__btn-submit" type="submit" aria-label="Сохранить">Сохранить</button>
          </form>
        </div>
      </div>

      {/* <!-- Окно добавления фотографий --> */}
      <div class="popup popup_type_add-photos" id="add-photos">
        <button class="popup__btn-close" type="button" aria-label="Закрыть"></button>
        <div class="popup__container">
          <h2 class="popup__title">Новое место</h2>
          <form class="popup__form" id="add-photos-form" novalidate>
            <input class="popup__input popup__input_type_photo-title" placeholder="Введите название места" name="name" id="mesto-name" minlength="2" maxlength="30" type="text" required />
            <span class="popup__error-hint" id="mesto-name-error"></span>
            <input class="popup__input popup__input_type_photo-link" placeholder="Ссылка на фотографию" name="link" id="mesto-link" type="url" required />
            <span class="popup__error-hint" id="mesto-link-error"></span>
            <button class="popup__btn-submit" type="submit" aria-label="Создать">Создать</button>
          </form>
        </div>
      </div>

      {/* <!-- Окно с полноэкранным режимом фотографий --> */}
      <div class="popup popup_type_fullscreen-photos" id="fullscreen-photos">
        <button class="popup__btn-close popup__btn-close_type_photo" type="button" aria-label="Закрыть"></button>
        <div class="popup__fullscreen">
          <img class="popup__image-fullscreen" src="#" alt="" />
          <p class="popup__image-subtitle"></p>
        </div>
      </div>

      {/* <!-- Окно подтверждения удаления фотографии --> */}
      <div class="popup popup_type_delete-confirmation" id="delete-confirmation">
        <button class="popup__btn-close" type="button" aria-label="Закрыть"></button>
        <div class="popup__container popup__container_type_delete-confirmation">
          <h2 class="popup__title">Вы точно хотите удалить?</h2>
          <form class="popup__form" id="delete-confirmation-form" name="form" novalidate>
            <button class="popup__btn-submit" type="submit" aria-label="Удалить">Да</button>
          </form>
        </div>
      </div>

      {/* <!-- Окно редактирования аватара пользователя --> */}
      <div class="popup popup_type_edit-profile-avatar" id="edit-profile-avatar">
        <button class="popup__btn-close" type="button" aria-label="Закрыть"></button>
        <div class="popup__container popup__container_type_edit-avatar">
          <h2 class="popup__title">Обновить аватар</h2>
          <form class="popup__form" id="edit-profile-avatar-form" name="form" novalidate>
            <input class="popup__input popup__input_type_photo-link" placeholder="Ссылка на фотографию" name="avatar" id="avatar-link" type="url" required />
            <span class="popup__error-hint" id="avatar-link-error"></span>
            <button class="popup__btn-submit" type="submit" aria-label="Сохранить">Сохранить</button>
          </form>
        </div>
      </div>

      {/* <!-- Шаблон карточки с фото --> */}
      <template class="elements__element-template">
        <li class="elements__element">
          <button class="elements__delete-button elements__delete-button_hidden" type="button" aria-label="Удалить"></button>
          <img class="elements__photo" src="#" alt="" />
          <div class="elements__info">
            <h2 class="elements__title"></h2>
            <div class="elements__likes">
              <button class="elements__like-button" type="button" aria-label="Оценить"></button>
              <p class="elements__like-count">1</p>
            </div>
          </div>
        </li>
      </template>
	  </body>
  );
}

export default App;
