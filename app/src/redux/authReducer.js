const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_CURRENT_USER = 'SET_CURRENT_USER'

let initialState = {
  isAuth: false,
  currentUser: {
    id: null,
    firstName: null,
    secondName: null,
    email: null,
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.bolean,
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser,
      }

    default:
      return state
  }
}

export const setIsAuthAC = (bolean) => ({ type: SET_IS_AUTH, bolean })
export const setCurrentUserAC = (currentUser) => ({ type: SET_CURRENT_USER, currentUser })

export default authReducer
