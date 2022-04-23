import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Authorization.module.css'
import errorSvg from './../../../assets/svg/errorSvg.svg'
import { Form, Field } from 'react-final-form'
import { composeValidators, mustBeLetter, required, tooShort, validate } from '../../common/Inputs/validates'
import { InputPasswordAuthorization, InputTextAuthorization } from '../../common/Inputs/Inputs'
import { ButtonAuth } from '../../common/Button/Button'

export const Register = () => {
  const onSubmit = (e) => {
    console.log('submit', e)
  }

  return (
    <>
      <div className={s.authForm}>
        <h1 className={s.titleForm}>Регистрация</h1>
        <Form
          validate={validate}
          onSubmit={onSubmit}
          render={({ handleSubmit, invalid }) => (
            <form onSubmit={(e) => handleSubmit(e)}>
              <Field
                name="firstName"
                initialValue=""
                placeholder="Имя"
                component={InputTextAuthorization}
                validate={composeValidators(required, mustBeLetter, tooShort('Имя', 2, 'ое'))}
              />

              <Field
                name="secondName"
                initialValue=""
                placeholder="Фамилия"
                component={InputTextAuthorization}
                validate={composeValidators(required, mustBeLetter, tooShort('Фамилия', 2, 'ое'))}
              />

              <Field
                name="email"
                initialValue=""
                placeholder="Электронная почта"
                component={InputTextAuthorization}
                validate={composeValidators(required, tooShort('Электронная почта', 6, 'ая'))}
              />

              <Field
                name="password"
                initialValue=""
                placeholder="Введите пароль"
                component={InputPasswordAuthorization}
                validate={composeValidators(required, tooShort('Пароль', 8, 'ий'))}
              />

              <Field
                name="passwordRepeat"
                initialValue=""
                placeholder="Повторите пароль"
                component={InputPasswordAuthorization}
              />

              <div className={s.buttonAuthWrapp}>
                <ButtonAuth type="submit" disabled={invalid}>
                  Применить и войти
                </ButtonAuth>
              </div>
            </form>
          )}
        />
        <div className={s.link}>
          Уже зарегистрированы? <NavLink to="/login">Вход</NavLink>
        </div>
      </div>
      <div className={s.errorMessage}>
        <img src={errorSvg} alt="" />
        <div className={s.errorMessageText}>Сообщение об ошибке</div>
      </div>
    </>
  )
}
