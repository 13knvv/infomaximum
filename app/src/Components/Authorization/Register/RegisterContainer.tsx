import React, { useState } from 'react'
import { setCurrentUserAC, setIsAuthAC } from '../../../redux/authReducer'
import { composeValidators, mustBeLetter, required, tooShort, validate } from '../../common/Inputs/validates'
import { Register } from './Register'
import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { setToken } from '../../../token/token'
import { REGISTER } from '../../../api/Signup'

export type DataRegisterFormType = {
  firstName: string
  secondName: string
  email: string 
  password: string
}

export const RegisterContainer = () => {
  const [onRegister] = useMutation(REGISTER)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()


  const onSubmitRegister = (dataRegisterForm: DataRegisterFormType): void => {
    onRegister({ variables: {  firstName: dataRegisterForm.firstName,
                               secondName: dataRegisterForm.secondName,
                               email: dataRegisterForm.email, 
                               password: dataRegisterForm.password } 
    })
    .then( response => {
      setErrorMessage('')
      setToken(response.data.signup)
      dispatch(setIsAuthAC(true))
      dispatch(setCurrentUserAC( { firstName: dataRegisterForm.firstName,
                                   secondName: dataRegisterForm.secondName,
                                   email: dataRegisterForm.email } ))
      
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
