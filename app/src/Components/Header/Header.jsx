import React from 'react'
import s from './Header.module.css'
import iconMenuButton from '../../assets/svg/menu.svg'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsOpenNavAC } from '../../redux/navReducer'
import { Navbar } from './Navbar/Navbar'

export const Header = () => {
  const dispatch = useDispatch()
  const isOpenNav = useSelector((state) => state.nav.isOpenNav)
  const setIsOpenNav = (bolean) => {
    dispatch(setIsOpenNavAC(bolean))
  }

  useEffect(() => {
    isOpenNav
      ? document.body.classList.add('body_noScrooll')
      : document.body.classList.remove('body_noScrooll')
  }, [isOpenNav])

  return (
    <header className={s.wrapp}>
      <div className={s.menuButton} onClick={() => setIsOpenNav(true)}>
        <div className={s.iconMenu}>
          <img src={iconMenuButton} alt="" />
        </div>
        <div>Меню</div>
      </div>
      <Navbar isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
    </header>
  )
}
