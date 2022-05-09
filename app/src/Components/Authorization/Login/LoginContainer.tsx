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

  const onSubmitLogin = useCallback((dataLoginForm: DataLoginFormType) => {
    onLogin({ variables: { email: dataLoginForm.email, password: dataLoginForm.password } })
      .then( response=> {
        setErrorMessage('')
        setToken(response.data.login.token)
        authStore.setCurrentUser(response.data.login.user)
        authStore.setIsAuth(true)
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
