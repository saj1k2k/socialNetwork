import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
  return <div className={s.content}>
    <div>
      <img className='profImg' src='https://img3.goodfon.ru/wallpaper/nbig/2/f1/tropical-paradise-beach-coast.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;