const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_CURRENT_USER = 'SET_CURRENT_USER'

let initialState = {
  isAuth: false,
  userId:null,
  userFirstName: null,
  userSecondName: null,
  userEmail: null,
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
        userId: action.currentUser.id,
        userFirstName: action.currentUser.firstName,
        userSecondName: action.currentUser.secondName,
        userEmail: action.currentUser.email,
      }

    default:
      return state
  }
}

export const setIsAuthAC = (bolean) => ({ type: SET_IS_AUTH, bolean })
export const setCurrentUserAC = (currentUser) => {
  console.log('setCurrentUserAC');
  return ({ type: SET_CURRENT_USER, currentUser })
}


export default authReducer
