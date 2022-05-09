import React from 'react'
import s from './Header.module.css'
import iconMenuButton from '../../assets/svg/menu.svg'
import { Navbar } from './Navbar/Navbar'
import { AuthStoreType } from '../../MobX/authStore'

export type HeaderPropsType = {
  setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>
  isOpenNav: boolean
  onLogout: () => void
  authStore: AuthStoreType
}

export const Header = (props: HeaderPropsType) => {

  const onClickMenuButton = () => {
    props.setIsOpenNav(true)
  }

  return (
    <header className={s.wrapp}>
      <div className={s.menuButton} onClick={onClickMenuButton}>
        <div className={s.iconMenu}>
          <img src={iconMenuButton} alt="" />
        </div>
        <div>Меню</div>
      </div>
      <Navbar
        isOpenNav={props.isOpenNav}
        setIsOpenNav={props.setIsOpenNav}
        onLogout={props.onLogout}
        authStore={props.authStore}
      />
    </header>
  )
}
