import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setIsOpenNavAC } from "../../redux/navReducer"
import { Header } from "./Header"

export const HeaderContainer = () => {
  const dispatch = useDispatch()
  const isOpenNav = useSelector(state => state.nav.isOpenNav)
  const setIsOpenNav = (bolean) => {
    dispatch(setIsOpenNavAC(bolean))
  }

  return (
    <Header isOpenNav={isOpenNav} 
            setIsOpenNav={setIsOpenNav}/>
  )
}

