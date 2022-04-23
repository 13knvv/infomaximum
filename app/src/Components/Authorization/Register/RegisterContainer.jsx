import React from 'react'
import { composeValidators, mustBeLetter, required, tooShort, validate } from '../../common/Inputs/validates'
import { Register } from './Register'

export const RegisterContainer = () => {
  
  const onSubmitRegister = (e) => {
    console.log('submit', e)
  }

  return <>
      <Register onSubmitRegister={onSubmitRegister}
                composeValidators={composeValidators}
                mustBeLetter={mustBeLetter}
                required={required}
                tooShort={tooShort}
                validate={validate} />
  </>
}
