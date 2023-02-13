import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
        <div className={s.imgWrapper}>
            <img className={s.profImg} src='https://img3.goodfon.ru/wallpaper/nbig/2/f1/tropical-paradise-beach-coast.jpg' alt='img' />
        </div>

        <div className="descriptionBlock">
            ava + description
        </div>
    </div>
  )
}

export default ProfileInfo;