import React from 'react'
import s from './Authorization.module.css'
import logoProceset from '../../assets/svg/logoProceset.svg'
import { Register } from './Register/Register'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Login/Login'

export const Authorization = () => {
  return (
    <div className={s.wrapp}>
      <div className={s.logo}>
        <img src={logoProceset} alt="Proceset" />
      </div>
      <div className={s.authFormWrapp}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}
