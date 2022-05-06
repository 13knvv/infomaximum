import React, { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Authorization.module.css'
import errorSvg from './../../../assets/svg/errorSvg.svg'
import { Form, Field } from 'react-final-form'
import { InputPasswordAuthorization, InputTextAuthorization } from '../../common/Inputs/Inputs'
import { ButtonAuth } from '../../common/Button/Button'
import { DataRegisterFormType } from './RegisterContainer'

type RegisterPropsType = {
  onSubmitRegister: (dataRegisterForm: DataRegisterFormType) => void
  composeValidators: any
  mustBeLetter: (value: string) => undefined | string
  required: (value: string) => undefined | string
  tooShort: (item: string, number: number, oeay: string) => (value: string) => undefined | string
  validate: (value: any) => any
  errorMessage: string
}

export const Register = React.memo((props: RegisterPropsType) => {
  const onSubmit = (dataRegisterForm: DataRegisterFormType) => {
    props.onSubmitRegister(dataRegisterForm)
  }

  return (
    <>
      <div className={s.authForm}>
        <h1 className={s.titleForm}>Регистрация</h1>
        <Form
          validate={props.validate}
          onSubmit={onSubmit}
          render={({ handleSubmit, invalid }) => (
            <form onSubmit={(e) => handleSubmit(e)}>
              <Field
                name="firstName"
                initialValue=""
                placeholder="Имя"
                component={InputTextAuthorization}
                validate={props.composeValidators(
                  props.required,
                  props.mustBeLetter,
                  props.tooShort('Имя', 2, 'ое')
                )}
              />

              <Field
                name="secondName"
                initialValue=""
                placeholder="Фамилия"
                component={InputTextAuthorization}
                validate={props.composeValidators(
                  props.required,
                  props.mustBeLetter,
                  props.tooShort('Фамилия', 2, 'ое')
                )}
              />

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
                placeholder="Введите пароль"
                component={InputPasswordAuthorization}
                validate={props.composeValidators(
                  props.required,
                  props.tooShort('Пароль', 8, 'ий')
                )}
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
      { props.errorMessage 
            && <div className={s.errorMessage}>
        <img src={errorSvg} alt="" />
        <div className={s.errorMessageText}>{props.errorMessage}</div>
      </div>}
    </>
  )
})
