import { makeAutoObservable } from "mobx"

export type UserType = {
  id?: number
  firstName?: string
  secondName?: string
  email?: string
}
export type AuthStoreType = {
  isAuth: boolean
  user:UserType
}


class AuthStore {
  isAuth: boolean = false
  user: UserType = {}

  constructor() {
    makeAutoObservable(this)
  }

  setIsAuth = (boolean: boolean) => {
    this.isAuth = boolean
  }

  setCurrentUser = (currentUser: UserType) => {
    this.user = currentUser
  }
}

export default AuthStore;