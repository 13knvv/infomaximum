import React from 'react'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsOpenNavAC } from '../../redux/navReducer'
import { Header } from './Header'

export const HeaderContainer = () => {
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
    <Header setIsOpenNav={setIsOpenNav} isOpenNav={isOpenNav} />
  )
}
