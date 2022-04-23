import React from 'react'
import s from '../Profile.module.css'
import { Form, Field } from 'react-final-form'
import { InputPasswordProfileEdit, InputTextProfileEdit } from '../../common/Inputs/Inputs'
import {
  composeValidators,
  mustBeLetter,
  required,
  tooShort,
  validate,
} from '../../common/Inputs/validates'
import Button from '../../common/Button/Button'

export const ProfileFormEdit = () => {

  const onSubmit = (e) => {
    console.log('submit', e)
  }

  return (
    <>
      <Form
        validate={validate}
        onSubmit={onSubmit}
        render={({ handleSubmit, invalid }) => (
          <>
            <div>
              <div className={s.header}>
                <h1>Борис Годунов. Редактирование</h1>
                <Button type="submit" form="profileFormEdit" disabled={invalid}>
                  Сохранить
                </Button>
              </div>
              <div className={s.body}>
                <form onSubmit={(e) => handleSubmit(e)} id="profileFormEdit">

                  <Field
                    name="firstName"
                    initialValue="Борис"
                    label="Имя"
                    component={InputTextProfileEdit}
                    validate={composeValidators(required, mustBeLetter, tooShort('Имя', 2, 'ое'))}
                  />

                  <Field
                    name="secondName"
                    initialValue="Годунов"
                    label="Фамилия"
                    component={InputTextProfileEdit}
                    validate={composeValidators(
                      required,
                      mustBeLetter,
                      tooShort('Фамилия', 2, 'ое')
                    )}
                  />

                  <Field
                    name="email"
                    initialValue="qwerty@yandex.ru"
                    label="Электронная почта"
                    component={InputTextProfileEdit}
                    validate={composeValidators(required, tooShort('Электронная почта', 6, 'ая'))}
                  />

                  <Field
                    name="password"
                    initialValue="1q2w3e4r"
                    label="Новый пароль"
                    component={InputPasswordProfileEdit}
                    validate={composeValidators(required, tooShort('Пароль', 8, 'ий'))}
                  />

                  <Field
                    name="passwordRepeat"
                    initialValue=""
                    label="Повторите пароль"
                    placeholder="Не задано"
                    component={InputPasswordProfileEdit}
                  />

                </form>
              </div>
            </div>
          </>
        )}
      />
    </>
  )
}
