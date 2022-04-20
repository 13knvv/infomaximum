import s from './Header.module.css'
import iconMenuButton from '../../assets/svg/menu.svg'
import { Navbar } from './Navbar/Navbar'

export const Header = (props) => {
  return (
    <header className={s.wrapp}>
      <div className={s.menuButton} onClick={() => props.setIsOpenNav(true)}>
        <div className={s.iconMenu}><img src={iconMenuButton} alt="" /></div>
        <div>Меню</div>
      </div>
      <Navbar isOpenNav={props.isOpenNav} 
              setIsOpenNav={props.setIsOpenNav}/>
    </header>
  )
}
