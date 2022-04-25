import React, { useState } from 'react'
import { setCurrentUserAC, setIsAuthAC } from '../../../redux/authReducer'
import { composeValidators, mustBeLetter, required, tooShort, validate } from '../../common/Inputs/validates'
import { Register } from './Register'
import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { setToken } from '../../../token/token'
import { REGISTER } from '../../../api/Signup'
import { LOGIN } from '../../../api/Login'

export const RegisterContainer = () => {
  const [onRegister] = useMutation(REGISTER)
  const [onLogin] = useMutation(LOGIN)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()


  const onSubmitRegister = (dataRegisterForm) => {
    onRegister({ variables: {  firstName: dataRegisterForm.firstName,
                            secondName: dataRegisterForm.secondName,
                            email: dataRegisterForm.email, 
                            password: dataRegisterForm.password } })
    .then( response => {
      setErrorMessage('')
      setToken(response.data.signup)
      dispatch(setCurrentUserAC(dataRegisterForm))
      dispatch(setIsAuthAC(true))
      // onLogin({ email: dataRegisterForm.email, password: dataRegisterForm.password })
      //   .then( response=> {
      //     setErrorMessage('')
      //     dispatch(setCurrentUserAC(response.data.login.user))
      //     dispatch(setIsAuthAC(true))
      //   })
      //   .catch((error)=> {
      //     setErrorMessage(error.message)
      //   }
      //     )
    })
    .catch((error)=> {
      setErrorMessage(error.message)
    }
      )
  }

  return <>
      <Register onSubmitRegister={onSubmitRegister}
                composeValidators={composeValidators}
                mustBeLetter={mustBeLetter}
                required={required}
                tooShort={tooShort}
                validate={validate}
                errorMessage={errorMessage} />
  </>
}
