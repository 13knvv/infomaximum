import React from 'react'
import s from './Profile.module.css'
import { Form, Field } from 'react-final-form'
import { InputPasswordProfileEdit, InputTextProfileEdit } from '../common/Inputs/Inputs'
import { composeValidators, mustBeLetter, required, tooShort, validate } from '../common/Inputs/validates'
import Button from '../common/Button/Button'
import { NewDataUserType } from './ProfileContainer'
import { AuthStoreType } from '../../MobX/authStore'
import { observer } from 'mobx-react-lite'

type ProfilePropsType = {
  authStore: AuthStoreType
  onSubmitEditUser: (newDataUser:  NewDataUserType) => void
  errorMessage: string
  isSaved: boolean
}

export const Profile = observer((props: ProfilePropsType) => {
  const { firstName, secondName, email } = props.authStore.user

  const onSubmit = (newDataUser: NewDataUserType) => {
    props.onSubmitEditUser(newDataUser)
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
                <h1>{firstName + ' ' + secondName}. Редактирование</h1>
                <Button type="submit" form="profileFormEdit" disabled={invalid} >
                  {props.isSaved ? 'Сохранено' : 'Сохранить'}
                </Button>
              </div>
              <div className={s.body}>
                <form onSubmit={(e) => handleSubmit(e)} id="profileFormEdit">

                  <Field
                    name="firstName"
                    initialValue={firstName}
                    label="Имя"
                    placeholder="Не задано"
                    component={InputTextProfileEdit}
                    validate={composeValidators(required, mustBeLetter, tooShort('Имя', 2, 'ое'))}
                  />

                  <Field
                    name="secondName"
                    initialValue={secondName}
                    label="Фамилия"
                    placeholder="Не задано"
                    component={InputTextProfileEdit}
                    validate={composeValidators(
                      required,
                      mustBeLetter,
                      tooShort('Фамилия', 2, 'ое')
                    )}
                  />

                  <Field
                    name="email"
                    initialValue={email}
                    label="Электронная почта"
                    placeholder="Не задано"
                    component={InputTextProfileEdit}
                    validate={composeValidators(required, tooShort('Электронная почта', 6, 'ая'))}
                  />

                  <Field
                    name="password"
                    initialValue=''
                    label="Новый пароль"
                    placeholder="Не задано"
                    component={InputPasswordProfileEdit}
                    validate={composeValidators(tooShort('Пароль', 8, 'ий'))}
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
            <div>{props.errorMessage}</div>
          </>
        )}
      />
    </>
  )
})
