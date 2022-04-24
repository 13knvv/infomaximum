import React, { useState } from 'react'
import { composeValidators, required, tooShort } from '../../common/Inputs/validates'
import { Login } from './Login'
import { LOGIN } from '../../../api/Login'
import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { setIsAuthAC } from '../../../redux/authReducer'
import { setToken } from '../../../token/token'


export const LoginContainer = () => {
  const [onLogin] = useMutation(LOGIN)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()

  const onSubmitLogin = (dataLoginForm) => {
    onLogin({ variables: { email: dataLoginForm.email, password: dataLoginForm.password } })
    .then( response=> {
      setErrorMessage('')
      setToken(response.data.login.token)
      dispatch(setIsAuthAC(true))
    })
    .catch((error)=> {
      setErrorMessage(error.message)
    }
      )
   
  }

  return (
     <Login composeValidators={composeValidators} 
          required={required}
          tooShort={tooShort}
          onSubmitLogin={onSubmitLogin}
          errorMessage={errorMessage} />
  )
}