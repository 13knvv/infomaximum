const SET_IS_FORM_VALID = 'SET_IS_FORM_VALID'

let initialState = {
  isFormValid: false,
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FORM_VALID:
      return {
        ...state,
        isFormValid: action.bolean,
      }

    default:
      return state
  }
}

export const setIsFormValidAC = (bolean) => ({ type: SET_IS_FORM_VALID, bolean })

export default formReducer
