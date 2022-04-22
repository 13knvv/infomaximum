import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setIsFormValidAC } from '../../../redux/formReducer'
import s from './Inputs.module.css'

export const InputTextProfileEdit = ({ input, meta, ...props }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (meta.error) {
      dispatch(setIsFormValidAC(false))
    } else {
      dispatch(setIsFormValidAC(true))
    }
  }, [meta.error])

  return (
    <div className={s.inputProfileEditWrapp}>
      <label>{props.label}</label>
      <span className={s.inputInner}>
        <input className={s.input + ' ' + ((meta.touched && meta.error) ? s.inputError : '')} {...input} />
        {meta.touched && meta.error && (
          <span className={s.errorMessege}>{meta.error}</span>
        )}
      </span>
    </div>
  )
}

export const InputPasswordProfileEdit = ({ input, meta, ...props }) => {
  const [isViewPassword, setIsViewPassword] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (meta.error) {
      dispatch(setIsFormValidAC(false))
    } else {
      dispatch(setIsFormValidAC(true))
    }
  }, [meta.error])

  return (
    <div className={s.inputProfileEditWrapp}>
      <label>{props.label}</label>
      <span className={s.inputInner}>
        <input
          {...input}
          className={s.input + ' ' + ((meta.touched && meta.error) ? s.inputError : '' ) }
          type={isViewPassword ? 'text' : 'password'}
          placeholder={props.placeholder}
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
  )
}