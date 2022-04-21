import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HeaderContainer } from './Components/Header/HeaderContainer'
import { LoginContainer } from './Components/Login/LoginContainer'
import { ProcessListsContainer } from './Components/ProcessLists/ProcessListsContainer'
import { ProfileContainer } from './Components/Profile/ProfileContainer'

const App = () => {
  const isAuth = false
  return (
    <>
      {isAuth ? (
        <LoginContainer />
      ) : (
        <div>
          <HeaderContainer />
          <div className="container">
            <Routes>
              <Route path="/profile" element={<ProfileContainer />} />
              <Route
                path="/process-lists"
                element={<ProcessListsContainer />}
              />
              <Route path="/" element={<ProfileContainer />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  )
}

export default App
