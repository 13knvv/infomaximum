import React, { useCallback, useState } from 'react'
import { composeValidators, mustBeLetter, required, tooShort, validate } from '../../common/Inputs/validates'
import { Register } from './Register'
import { useMutation, useQuery } from '@apollo/client'
import { setToken } from '../../../token/token'
import { REGISTER } from '../../../api/Signup'
import { GET_CURRENT_USER } from '../../../api/GetCurrentUser'
import { useStores } from '../../../MobX/stores'

export type DataRegisterFormType = {
  firstName: string
  secondName: string
  email: string 
  password: string
}

export const RegisterContainer = () => {
  const { authStore } = useStores()
  const [onRegister] = useMutation(REGISTER)
  const {data, refetch: refetchCurrentUser} = useQuery(GET_CURRENT_USER)
  const [errorMessage, setErrorMessage] = useState('')


  const onSubmitRegister = useCallback( async (dataRegisterForm: DataRegisterFormType): Promise<void> => {
    try {
      const response = await onRegister({ variables: {  firstName: dataRegisterForm.firstName,
                               secondName: dataRegisterForm.secondName,
                               email: dataRegisterForm.email, 
                               password: dataRegisterForm.password } 
                              })

      setErrorMessage('')
      setToken(response.data.signup)
      await refetchCurrentUser() 
      authStore.setCurrentUser(data.currentUser)
      authStore.setIsAuth(true)

    } catch(error: any) {
      setErrorMessage(error.message)
    }
  
  }, [])

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
