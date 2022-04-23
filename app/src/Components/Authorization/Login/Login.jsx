import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Authorization.module.css'
import errorSvg from './../../../assets/svg/errorSvg.svg'
import { Form, Field } from 'react-final-form'
import { ButtonAuth } from '../../common/Button/Button'
import { InputPasswordAuthorization, InputTextAuthorization } from '../../common/Inputs/Inputs'

export const Login = (props) => {
  const onSubmit = (e) => {
    props.onSubmitLogin(e)
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
                validate={props.composeValidators(
                  props.required,
                  props.tooShort('Электронная почта', 6, 'ая')
                )}
              />

              <Field
                name="password"
                initialValue=""
                placeholder="Пароль"
                component={InputPasswordAuthorization}
                validate={props.composeValidators(
                  props.required,
                  props.tooShort('Пароль', 8, 'ий')
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
