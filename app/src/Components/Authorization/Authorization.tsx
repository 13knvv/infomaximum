import React from 'react'
import s from './Authorization.module.css'
import logoProceset from '../../assets/svg/logoProceset.svg'
import { RegisterContainer } from './Register/RegisterContainer'
import { Route, Routes } from 'react-router-dom'
import { LoginContainer } from './Login/LoginContainer'

export const Authorization = () => {
  return (
    <div className={s.wrapp}>
      <div className={s.logo}>
        <img src={logoProceset} alt="Proceset" />
      </div>
      <div className={s.authFormWrapp}>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="*" element={<LoginContainer />} />
        </Routes>
      </div>
    </div>
  )
}
