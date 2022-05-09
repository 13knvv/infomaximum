import React, { useCallback } from 'react'
import s from './Navbar.module.css'
import proceset from '../../../assets/svg/proceset.svg'
import menuIconWhite from '../../../assets/svg/menuIconWhite.svg'
import userSvg from '../../../assets/svg/userSvg.svg'
import procListIcon from '../../../assets/svg/procListIcon.svg'
import { NavLink } from 'react-router-dom'
import { HeaderPropsType } from '../Header'

export const Navbar = (props: HeaderPropsType) => {
  const { user } = props.authStore

  const closeNavBar = useCallback(() => {
    props.setIsOpenNav(false)
  }, [])

  return (
    <>
      <div
        className={s.back + ' ' + (props.isOpenNav ? s.backOn : '')}
        onClick={closeNavBar}
      ></div>
      <nav className={s.nav + ' ' + (props.isOpenNav ? s.navOn : '')}>
        <ul>
          <li className={s.item + ' ' + s.itemLogo}>
            <div className={s.iconItem}>
              <img src={menuIconWhite} alt="" />
            </div>
            <div className={s.titleItem}>
              <img src={proceset} alt="" />
            </div>
          </li>
          <NavLink to="profile" onClick={closeNavBar}>
            <li className={s.item}>
              <div className={s.iconItem}>
                <img src={userSvg} alt="" />
              </div>
              <div className={s.titleItem}>{user.firstName}</div>
            </li> 
          </NavLink>
          <NavLink to="/process-lists" onClick={closeNavBar}>
            <li className={s.item}>
              <div className={s.iconItem}>
                <img src={procListIcon} alt="" />
              </div>
              <div className={s.titleItem}>Список процессов</div>
            </li>
          </NavLink>
          <NavLink to="/login" onClick={props.onLogout}>
            <li className={s.item}>
              <div className={s.titleItem}>Выход</div>
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  )
}