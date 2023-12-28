const messages = {
  name: { require: 'Имя обязательно для заполнения' },
  phone: {
    require: 'Телефон обязателен для заполнения',
    phone: 'Телефон обязателен для заполнения',
  },
}

const handleRules = {
  require: (fieldName, fieldProps, rule) => {
    fieldProps.validateError = ''

    if (!fieldProps.value.trim()) {
      fieldProps.validateError = messages[fieldName][rule]
    }

    return !!fieldProps.validateError
  },

  phone: (fieldName, fieldProps, rule) => {
    fieldProps.validateError = ''

    if (!fieldProps.value.match(/^\+\d\(\d{3}\)\d{3}-\d{2}-\d{2}/)) {
      fieldProps.validateError = messages[fieldName][rule]
    }

    return !!fieldProps.validateError
  },
}

const validate = (fields) => {
  let isValid = true

  Object.entries(fields).forEach(([fieldName, fieldProps]) => {
    if (fieldProps.validation) {
      const rules = fieldProps.validation.rules
      for (let rule of rules) {
        const isValidRule = handleRules[rule](fieldName, fieldProps, rule)
        if (isValidRule) {
          isValid = false
          break
        }
      }
    }
  })

  return isValid
}

export { validate }
