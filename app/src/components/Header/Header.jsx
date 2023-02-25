import React from 'react'
import { NavLink } from "react-router-dom"
import s from './Header.module.css'

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://cdn.discordapp.com/attachments/1041876464829747222/1078786420640055296/saj1k2k_minimalistic_logo_like_facebook_b395a1ad-4ab9-47a5-a85d-89fe3a193417.png'  alt='rerere'/>

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;