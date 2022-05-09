import { createContext, useContext } from "react"
import AuthStore from "./authStore"

class RootStore {
  constructor() {
    this.authStore = new AuthStore(this)
  }
}

const StoresContext = createContext(new RootStore())

export const useStores = () => useContext(StoresContext)