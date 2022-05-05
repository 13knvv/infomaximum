import React, { useState } from 'react'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuthAC } from '../../redux/authReducer'
import { removeToken } from '../../token/token'
import { Header } from './Header'

export const HeaderContainer = () => {
  const dispatch = useDispatch()
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false)
  const userName = useSelector<any, string>( state => state.auth.user.firstName)

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
