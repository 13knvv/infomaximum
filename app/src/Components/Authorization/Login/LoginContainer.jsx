import React from 'react'
import { composeValidators, required, tooShort } from '../../common/Inputs/validates'
import { Login } from './Login'

export const LoginContainer = () => {

  const onSubmitLogin = (e) => {
    console.log('submit', e)
  }

  return (<>
    <Login composeValidators={composeValidators} 
          required={required}
          tooShort={tooShort}
          onSubmitLogin={onSubmitLogin} />
  </>)
}
