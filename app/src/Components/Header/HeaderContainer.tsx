import React, { useCallback, useState } from 'react'
import { useEffect} from 'react'
import { useStores } from '../../MobX/stores'
import { removeToken } from '../../token/token'
import { Header } from './Header'

const HeaderContainer = React.memo(() => {
  const { authStore } = useStores()
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false)

  useEffect(() => {
    isOpenNav
      ? document.body.classList.add('body_noScrooll')
      : document.body.classList.remove('body_noScrooll')
  }, [isOpenNav])

  const onLogout = useCallback(() => {
    removeToken()
    authStore.setIsAuth(false)
    setIsOpenNav(false)
  }, [])

  return (
    <Header setIsOpenNav={setIsOpenNav} 
            isOpenNav={isOpenNav} 
            onLogout={onLogout} 
            authStore={authStore} />
  )
})

HeaderContainer.displayName = 'HeaderContainer'

export default HeaderContainer
