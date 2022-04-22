import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Authorization.module.css'
import errorSvg from './../../../assets/svg/errorSvg.svg'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { required } from '../../common/Inputs/validates'
import { setIsFormValidAC } from '../../../redux/formReducer'
import {
  InputPasswordAuthorization,
  InputTextAuthorization,
} from '../../common/Inputs/Inputs'
import { ButtonAuth } from '../../common/Button/Button'

export const Login = () => {
  const dispatch = useDispatch()
  const isFormValid = useSelector((state) => state.form.isFormValid)

  const onSubmit = (e) => {
    console.log('submit', e)
  }

  const errorsCheck = (errors) => {
    dispatch(setIsFormValidAC(true))
    for (let key in errors) {
      if (errors[key]) {
        dispatch(setIsFormValidAC(false))
        break
      }
    }
  }
  return (
    <>
      <div className={s.authForm}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, errors }) => (
            <form
              onSubmit={(e) => handleSubmit(e)}
              onChange={() => errorsCheck(errors)}
              onBlur={() => errorsCheck(errors)}
            >
              <Field
                name="email"
                initialValue=""
                placeholder="Электронная почта"
                component={InputTextAuthorization}
                validate={required}
              />

              <Field
                name="password"
                initialValue=""
                placeholder="Пароль"
                component={InputPasswordAuthorization}
                validate={required}
              />

              <div className={s.buttonAuthWrapp}>
                <ButtonAuth type="submit" disabled={!isFormValid}>
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
