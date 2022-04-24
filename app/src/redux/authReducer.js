const SET_IS_AUTH = 'SET_IS_AUTH'

let initialState = {
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.bolean,
      }

    default:
      return state
  }
}

export const setIsAuthAC = (bolean) => ({ type: SET_IS_AUTH, bolean })

export default authReducer
