import React, { useState } from 'react'
import s from './ProfileFormEdit.module.css'
import { Form, Field } from 'react-final-form'

export const ProfileFormEdit = () => {
  const [isViewPassword, setIsViewPassword] = useState(false)
  const [isViewPasswordRepeat, setIsViewPasswordRepeat] = useState(false)

  const onSubmit = (e) => {
    console.log('submit', e)
  }
  const required = (value) => {
    return( value ? undefined : 'Произошла ошибка. Поле должно бть заполнено')
  }
  const mustBeLetter = (value) => {
    return (!/^[a-zA-Zа-яА-Я]/.test(value) 
    ? 'Произошла ошибка. Допустимы только буквы'
      : undefined)
  }

  const tooShort = (item, number, oeay) => (value) => {
    return (value.length < number
      ? `Произошла ошибка. ${item} слишком коротк${oeay}`
      : undefined)
  }

  const composeValidators = (...validators) => (value) => {
    return validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      )
  }
  const validate = (values) => {
    const errors = {}

    if (values.passwordRepeat !== values.password) {
      errors.passwordRepeat = 'Required'
    }
    console.log(errors)
    return errors
  }
     

  return (
    <>
      <Form
      validate={validate}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} id="profileFormEdit">
            <Field
              name="firstName"
              initialValue="Борис"
              validate={composeValidators(
                required,
                mustBeLetter,
                tooShort('Имя', 2, 'ое')
              )}
              render={({ input, meta }) => (
                <div className={s.inputProfileFormEditWrapp}>
                  <label>Имя</label>
                  <span className={s.inputInner}>
                    <input {...input} />
                    {meta.touched && meta.error && (
                      <span className={s.errorMessege}>{meta.error}</span>
                    )}
                  </span>
                </div>
              )}
            />
            <Field
              name="secondName"
              initialValue="Годунов"
              validate={composeValidators(
                required,
                mustBeLetter,
                tooShort('Фамилия', 2, 'ое')
              )}
              render={({ input, meta }) => (
                <div className={s.inputProfileFormEditWrapp}>
                  <label>Фамилия</label>
                  <span className={s.inputInner}>
                    <input {...input} />
                    {meta.touched && meta.error && (
                      <span className={s.errorMessege}>{meta.error}</span>
                    )}
                  </span>
                </div>
              )}
            />
            <Field
              name="email"
              initialValue="qwerty@yandex.ru"
              validate={composeValidators(
                required,
                tooShort('Электронная почта', 4, 'ая')
              )}
              render={({ input, meta }) => (
                <div className={s.inputProfileFormEditWrapp}>
                  <label>Электронная почта</label>
                  <span className={s.inputInner}>
                    <input {...input} />
                    {meta.touched && meta.error && (
                      <span className={s.errorMessege}>{meta.error}</span>
                    )}
                  </span>
                </div>
              )}
            />
            <Field
              name="password"
              initialValue="1q2w3e4r"
              validate={composeValidators(
                required,
                tooShort('Пароль', 8, 'ий')
              )}
              render={({ input, meta }) => (
                <div className={s.inputProfileFormEditWrapp}>
                  <label>Новый пароль</label>
                  <span className={s.inputInner}>
                    <input
                      {...input}
                      type={isViewPassword ? 'text' : 'password'}
                    />
                    <span
                      onClick={() => setIsViewPassword(!isViewPassword)}
                      className={
                        s.passwordControl +
                        ' ' +
                        (isViewPassword ? s.passwordControlView : '')
                      }
                    ></span>
                    {meta.touched && meta.error && (
                      <span className={s.errorMessege}>{meta.error}</span>
                    )}
                  </span>
                </div>
              )}
            />
            <Field
              name="passwordRepeat"
              render={({ input, meta }) => (
                <div className={s.inputProfileFormEditWrapp}>
                  <label>Повторите пароль</label>
                  <span className={s.inputInner}>
                    <input
                      {...input}
                      type={isViewPasswordRepeat ? 'text' : 'password'}
                      placeholder="Не задано"
                    />
                    <span
                      onClick={() =>
                        setIsViewPasswordRepeat(!isViewPasswordRepeat)
                      }
                      className={
                        s.passwordControl +
                        ' ' +
                        (isViewPasswordRepeat ? s.passwordControlView : '')
                      }
                    ></span>
                    {meta.touched && meta.error && (
                      <span className={s.errorMessege}>{meta.error}</span>
                    )}
                  </span>
                </div>
              )}
            />
          </form>
        )}
      />
    </>
  )
}
