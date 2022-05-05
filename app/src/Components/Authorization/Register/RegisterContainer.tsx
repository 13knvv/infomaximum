import React, { useState } from 'react'
import { setCurrentUserAC, setIsAuthAC } from '../../../redux/authReducer'
import { composeValidators, mustBeLetter, required, tooShort, validate } from '../../common/Inputs/validates'
import { Register } from './Register'
import { useMutation, useQuery } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { setToken } from '../../../token/token'
import { REGISTER } from '../../../api/Signup'
import { GET_CURRENT_USER } from '../../../api/GetCurrentUser'

export type DataRegisterFormType = {
  firstName: string
  secondName: string
  email: string 
  password: string
}

export const RegisterContainer = () => {
  const [onRegister] = useMutation(REGISTER)
  const {data, refetch: refetchCurrentUser} = useQuery(GET_CURRENT_USER)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()


  const onSubmitRegister = async (dataRegisterForm: DataRegisterFormType): Promise<void> => {
    try {
      const response = await onRegister({ variables: {  firstName: dataRegisterForm.firstName,
                               secondName: dataRegisterForm.secondName,
                               email: dataRegisterForm.email, 
                               password: dataRegisterForm.password } 
                              })

      setErrorMessage('')
      setToken(response.data.signup)
      await refetchCurrentUser() 
      dispatch(setCurrentUserAC(data.currentUser))
      dispatch(setIsAuthAC(true))

    } catch(error: any) {
      setErrorMessage(error.message)
    }
  
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