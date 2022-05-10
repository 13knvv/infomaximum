import React, { useEffect, useState } from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from './api/GetCurrentUser'
import './App.css'
import { Authorization } from './Components/Authorization/Authorization'
import HeaderContainer from './Components/Header/HeaderContainer'
import { ProcessListContainer } from './Components/ProcessList/ProcessListContainer'
import { ProfileContainer } from './Components/Profile/ProfileContainer'
import { useStores } from './MobX/stores'
import { observer } from 'mobx-react-lite'

const App = () => {
  const { authStore } = useStores()
  const { data, loading } = useQuery(GET_CURRENT_USER)
  const [isInitSuccess, setIsInitSuccess] = useState<boolean>(false)

  useEffect(() => {
    if (data) {
      authStore.setIsAuth(true)
      authStore.setCurrentUser(data.currentUser)
    }
  }, [data])

  useEffect(() => {
    if (!loading) {
    setIsInitSuccess(true)
    }
  }, [loading])

  if (!isInitSuccess) return <div>Инициализация приложения</div>
  if (!authStore.isAuth) return <Authorization />
    return <>
              <div>
                <HeaderContainer />
                <div className="container">
                  <Routes>
                    <Route path="/login" element={<Navigate to="/profile" />} />
                    <Route path="/register" element={<Navigate to="/profile" />} />
                    <Route path="/profile" element={<ProfileContainer />} />
                    <Route path="/process-lists" element={<ProcessListContainer />} />
                    <Route path="/" element={<ProfileContainer />} />
                  </Routes>
                </div>
              </div>
          </>
}

export default observer(App)
