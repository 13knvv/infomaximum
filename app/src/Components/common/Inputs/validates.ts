export const validate = (values: any) => {
  const errors: any = {}
  if (values.passwordRepeat !== values.password) {
    errors.passwordRepeat = 'Пароли должны совпадать'
  }
  return errors
}

export const composeValidators =
  (...validators: any[]) =>
  (value: string) => {
    return validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    )
}
  
export const required = (value: string) => {
  return value ? undefined : 'Произошла ошибка. Поле должно бть заполнено'
}

export const mustBeLetter = (value: string) => {
  let isValidate = true
  value.split('').forEach((item) => {
    if (!(/^[a-zA-Zа-яА-Я]/.test(item))) {
      isValidate = false
    }
  })

  return !isValidate ? 
            'Произошла ошибка. Допустимы только буквы'
            : undefined
}

export const tooShort = (item: string, number: number, oeay: string) => (value: string) => {
  return value.length < number
    ? `Произошла ошибка. ${item} слишком коротк${oeay}`
    : undefined
}

