import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
          <img className='profImg' src='https://img3.goodfon.ru/wallpaper/nbig/2/f1/tropical-paradise-beach-coast.jpg' />
      </div>
      
    <div className="">
      ava + description
    </div>

    <MyPosts/>

    </div>
  )
}

export default Profile;