import React from 'react'
import s from './Header.module.css'
import iconMenuButton from '../../assets/svg/menu.svg'
import { Navbar } from './Navbar/Navbar'

export type HeaderPropsType = {
  setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>
  isOpenNav: boolean
  onLogout: () => void
  userName: string
}

export const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.wrapp}>
      <div className={s.menuButton} onClick={() => props.setIsOpenNav(true)}>
        <div className={s.iconMenu}>
          <img src={iconMenuButton} alt="" />
        </div>
        <div>Меню</div>
      </div>
      <Navbar
        isOpenNav={props.isOpenNav}
        setIsOpenNav={props.setIsOpenNav}
        onLogout={props.onLogout}
        userName={props.userName}
      />
    </header>
  )
}
