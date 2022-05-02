const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_CURRENT_USER = 'SET_CURRENT_USER'

export type UserType = {
  id?: number
  firstName?: string
  secondName?: string
  email?: string
}

type InitialStateType = {
  isAuth: boolean
  user: UserType
}

let initialState = {
  isAuth: false,
  user: {}
}

const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.boolean,
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.currentUser
      }

    default:
      return state
  }
}

type ActionType = SetCurrentUserACType | SetIsAuthACType

type SetIsAuthACType = {
  type: typeof SET_IS_AUTH
  boolean: boolean
}
export const setIsAuthAC = (boolean: boolean): SetIsAuthACType  => ({
                  type: SET_IS_AUTH, boolean })

type SetCurrentUserACType = {
  type: typeof SET_CURRENT_USER
  currentUser: UserType
}
export const setCurrentUserAC  = (currentUser: UserType): SetCurrentUserACType => ({
                  type: SET_CURRENT_USER, currentUser })


export default authReducer
