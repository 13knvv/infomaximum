export const validate = (values) => {
  const errors = {}
  if (values.passwordRepeat !== values.password) {
    errors.passwordRepeat = 'Пароли должны совпадать'
  }
  return errors
}

export const composeValidators =
  (...validators) =>
  (value) => {
    return validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    )
}
  
export const required = (value) => {
  return value ? undefined : 'Произошла ошибка. Поле должно бть заполнено'
}

export const mustBeLetter = (value) => {
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

export const tooShort = (item, number, oeay) => (value) => {
  return value.length < number
    ? `Произошла ошибка. ${item} слишком коротк${oeay}`
    : undefined
}

