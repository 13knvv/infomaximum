import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Authorization.module.css'
import errorSvg from './../../../assets/svg/errorSvg.svg'
import { Form, Field } from 'react-final-form'
import { composeValidators, required, tooShort } from '../../common/Inputs/validates'
import { InputPasswordAuthorization, InputTextAuthorization } from '../../common/Inputs/Inputs'
import { ButtonAuth } from '../../common/Button/Button'

export const Login = () => {
  const onSubmit = (e) => {
    console.log('submit', e)
  }

  return (
    <>
      <div className={s.authForm}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, invalid }) => (
            <form onSubmit={(e) => handleSubmit(e)}>
              <Field
                name="email"
                initialValue=""
                placeholder="Электронная почта"
                component={InputTextAuthorization}
                validate={composeValidators(
                  required,
                  tooShort('Электронная почта', 6, 'ая')
                )}
              />

              <Field
                name="password"
                initialValue=""
                placeholder="Пароль"
                component={InputPasswordAuthorization}
                validate={composeValidators(
                  required,
                  tooShort('Пароль', 8, 'ий')
                )}
              />

              <div className={s.buttonAuthWrapp}>
                <ButtonAuth type="submit" disabled={invalid}>
                  Войти в систему
                </ButtonAuth>
              </div>
            </form>
          )}
        />
        <div className={s.link}>
          <NavLink to="/register">Зарегистрироваться</NavLink>
        </div>
      </div>
      <div className={s.errorMessage}>
        <img src={errorSvg} alt="" />
        <div className={s.errorMessageText}>Сообщение об ошибке</div>
      </div>
    </>
  )
}
