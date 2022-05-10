import React, { useCallback, useState } from 'react'
import { composeValidators, required, tooShort } from '../../common/Inputs/validates'
import { Login } from './Login'
import { LOGIN } from '../../../api/Login'
import { useMutation } from '@apollo/client'
import { setToken } from '../../../token/token'
import { useStores } from '../../../MobX/stores'

export type DataLoginFormType = {
  email: string
  password: string
}

export const LoginContainer = () => {
  const {authStore} = useStores()
  const [onLogin] = useMutation(LOGIN)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmitLogin = useCallback( async (dataLoginForm: DataLoginFormType) => {
    try {
      const response = await onLogin({ variables: dataLoginForm })
      setErrorMessage('')
      setToken(response.data.login.token)
      authStore.setCurrentUser(response.data.login.user)
      authStore.setIsAuth(true)
    } catch(error: any) { 
        setErrorMessage(error.message)
    }
  }, [])

  return (
     <Login composeValidators={composeValidators} 
            required={required}
            tooShort={tooShort}
            onSubmitLogin={onSubmitLogin}
            errorMessage={errorMessage} />
  )
}
