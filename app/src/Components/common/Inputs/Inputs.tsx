import React, { useState } from 'react'
import s from './Inputs.module.css'
import { FieldRenderProps } from "react-final-form"

type InputPropsType = FieldRenderProps<string, any>

export const InputTextProfileEdit = ({ input, meta, ...props}: InputPropsType) => {
  return (
    <div className={s.inputProfileEditWrapp}>
      <label>{props.label}</label>
      <span className={s.inputInner}>
        <input
          className={
            s.input + ' ' + (meta.touched && meta.error ? s.inputError : '')
          }
          {...input}
          placeholder={props.placeholder}
        />
        {meta.touched && meta.error && (
          <span className={s.errorMessege}>{meta.error}</span>
        )}
      </span>
    </div>
  )
}

export const InputTextAuthorization = ({ input, meta, ...props }: InputPropsType) => {
  return (
    <div className={s.inputAuthWrapp}>
      <span className={s.inputInner}>
        <input
          className={
            s.inputAuth + ' ' + (meta.touched && meta.error ? s.inputError : '')
          }
          placeholder={props.placeholder}
          {...input}
        />
        {meta.touched && meta.error && (
          <span className={s.errorMessege}>{meta.error}</span>
        )}
      </span>
    </div>
  )
}

export const InputPasswordProfileEdit = ({ input, meta, ...props }: InputPropsType) => {
  const [isViewPassword, setIsViewPassword] = useState(false)

  const onClickPasswordControl = () => {
    setIsViewPassword(!isViewPassword)
  }

  return (
    <div className={s.inputProfileEditWrapp}>
      <label>{props.label}</label>
      <span className={s.inputInner}>
        <input
          {...input}
          className={
            s.input + ' ' + (meta.touched && meta.error ? s.inputError : '')
          }
          type={isViewPassword ? 'text' : 'password'}
          placeholder={props.placeholder}
        />
        <span
          onClick={onClickPasswordControl}
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
export const InputPasswordAuthorization = ({ input, meta, ...props }: InputPropsType) => {
  const [isViewPassword, setIsViewPassword] = useState(false)

  const onClickPasswordControl = () => {
    setIsViewPassword(!isViewPassword)
  }

  return (
    <div className={s.inputAuthWrapp}>
      <span className={s.inputInner}>
        <input
          {...input}
          className={
            s.inputAuth + ' ' + (meta.touched && meta.error ? s.inputError : '')
          }
          type={isViewPassword ? 'text' : 'password'}
          placeholder={props.placeholder}
        />
        <span
          onClick={onClickPasswordControl}
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
