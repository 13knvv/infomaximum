import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { setIsFormValidAC } from '../../../redux/formReducer'
import { InputPasswordProfileEdit, InputTextProfileEdit } from '../../common/Inputs/Inputs'
import { composeValidators, mustBeLetter, required, tooShort, validate } from '../../common/Inputs/validates'


export const ProfileFormEdit = () => {
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    console.log('submit', e)
    dispatch(setIsFormValidAC(false))
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
      <Form
        validate={validate}
        onSubmit={onSubmit}
        render={({ handleSubmit, errors}) => (
          <form onSubmit={e => handleSubmit(e)}
                onChange={() => errorsCheck(errors)}
                onBlur={() => errorsCheck(errors)}
           id="profileFormEdit">
            
            <Field
              name="firstName"
              initialValue="Борис"
              label="Имя"
              component={InputTextProfileEdit}
              validate={composeValidators(
                required,
                mustBeLetter,
                tooShort('Имя', 2, 'ое')
              )}
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
              validate={composeValidators(
                required,
                tooShort('Электронная почта', 6, 'ая')
              )}
            />

            <Field
              name="password"
              initialValue="1q2w3e4r"
              label="Новый пароль"
              component={InputPasswordProfileEdit}
              validate={composeValidators(
                required,
                tooShort('Пароль', 8, 'ий')
              )}
            />

            <Field
              name="passwordRepeat"
              initialValue=""
              label="Повторите пароль"
              placeholder="Не задано"
              component={InputPasswordProfileEdit}
            />
          </form>
        )}
      />
    </>
  )
}
