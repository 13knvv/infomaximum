import React, { useState } from 'react'
import { setIsAuthAC } from '../../../redux/authReducer'
import { composeValidators, mustBeLetter, required, tooShort, validate } from '../../common/Inputs/validates'
import { Register } from './Register'
import { useMutation, useQuery } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { setToken } from '../../../token/token'
import { REGISTER } from '../../../api/Signup'
import { GET_CURRENT_USER } from '../../../api/GetCurrentUser'

export const RegisterContainer = () => {
  const [onRegister] = useMutation(REGISTER)
  const { data } = useQuery(GET_CURRENT_USER)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()

  const onSubmitRegister = (dataRegisterForm) => {
    console.log(data);
    onRegister({ variables: {  firstName: dataRegisterForm.firstName,
                            secondName: dataRegisterForm.secondName,
                            email: dataRegisterForm.email, 
                            password: dataRegisterForm.password } })
    .then( response => {
      setErrorMessage('')
      setToken(response.data.signup)
      dispatch(setIsAuthAC(true))
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
