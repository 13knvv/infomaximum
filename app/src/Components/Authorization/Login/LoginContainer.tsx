import React, { useCallback, useState } from 'react'
import { composeValidators, required, tooShort } from '../../common/Inputs/validates'
import { Login } from './Login'
import { LOGIN } from '../../../api/Login'
import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { setCurrentUserAC, setIsAuthAC } from '../../../redux/authReducer'
import { setToken } from '../../../token/token'
import { DataRegisterFormType } from '../Register/RegisterContainer'

export type DataLoginFormType = {
  email: string
  password: string
}

export const LoginContainer = () => {
  const [onLogin] = useMutation(LOGIN)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()

  const onSubmitLogin = useCallback((dataLoginForm: DataLoginFormType) => {
    onLogin({ variables: { email: dataLoginForm.email, password: dataLoginForm.password } })
      .then( response=> {
        setErrorMessage('')
        setToken(response.data.login.token)
        dispatch(setCurrentUserAC(response.data.login.user))
        dispatch(setIsAuthAC(true))
      })
      .catch((error)=> {
        setErrorMessage(error.message)
      })
  }, [])

  return (
     <Login composeValidators={composeValidators} 
            required={required}
            tooShort={tooShort}
            onSubmitLogin={onSubmitLogin}
            errorMessage={errorMessage} />
  )
}
