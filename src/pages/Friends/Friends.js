import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/Profile.css'

const Friends = () => {
  return (
    <div>
      <div>
      <Header />
      <div className="Profile">
        <div className="Profile__left">
          <h2 className='Profile__heading'>Никнейм</h2>
          <p className='Profile__line line-Friends'>Друзья</p>
          <p className='Profile__line'>Избранное</p>
          <p className='Profile__line'>Мои публикации</p>
          <button  className='Profile__btn'>Выход</button>
        </div>
        <div className="profile__right">
          <h1 className='Profile__main-heading'>Друзья</h1>
          <button className='right__btn btn-friends'>Список друзей</button>
          <input type="text" className='Profile__input' placeholder='Поиск рецепта' />
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Friends;