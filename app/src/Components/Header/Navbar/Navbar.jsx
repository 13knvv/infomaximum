import s from "./Navbar.module.css"
import proceset from '../../../assets/svg/proceset.svg'
import menuIconWhite from '../../../assets/svg/menuIconWhite.svg'
import user from '../../../assets/svg/user.svg'
import procListIcon from '../../../assets/svg/procListIcon.svg'
import { NavLink } from "react-router-dom"


export const Navbar = (props) => {
  return (
    <>
      <div className={s.back + ' ' + (props.isOpenNav ? s.backOn : '')} onClick={() => props.setIsOpenNav(false)}>
      </div>
        <nav className={s.nav + ' ' + (props.isOpenNav ? s.navOn : '')}>
          <ul>
            <li className={s.item + ' ' + s.itemLogo}>
              <div className={s.iconItem}><img src={menuIconWhite} alt="" /></div>
              <div className={s.titleItem}><img src={proceset} alt="" /></div>
            </li>
            <NavLink to='profile' onClick={() => props.setIsOpenNav(false)}>
              <li className={s.item}>
                <div className={s.iconItem}><img src={user} alt="" /></div>
                <div className={s.titleItem}>Username</div>
              </li>
            </NavLink>
            <NavLink to='/process-lists'  onClick={() => props.setIsOpenNav(false)}>
              <li className={s.item}>
                <div className={s.iconItem}><img src={procListIcon} alt="" /></div>
                <div className={s.titleItem}>Список процессов</div>
              </li>
            </NavLink>
          </ul>
        </nav>
      </>
  )
  
}
