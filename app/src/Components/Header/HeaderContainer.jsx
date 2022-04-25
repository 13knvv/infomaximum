import React from 'react'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuthAC } from '../../redux/authReducer'
import { setIsOpenNavAC } from '../../redux/navReducer'
import { removeToken } from '../../token/token'
import { Header } from './Header'

export const HeaderContainer = () => {
  const dispatch = useDispatch()
  const isOpenNav = useSelector( state => state.nav.isOpenNav)
  const userName = useSelector( state => state.auth.user.firstName)
  const setIsOpenNav = (bolean) => {
    dispatch(setIsOpenNavAC(bolean))
  }

  useEffect(() => {
    isOpenNav
      ? document.body.classList.add('body_noScrooll')
      : document.body.classList.remove('body_noScrooll')
  }, [isOpenNav])

  const onLogout = () => {
    removeToken()
    dispatch(setIsAuthAC(false))
    setIsOpenNav(false)
  }

  return (
    <Header setIsOpenNav={setIsOpenNav} 
            isOpenNav={isOpenNav} 
            onLogout={onLogout} 
            userName={userName} />
  )
}
