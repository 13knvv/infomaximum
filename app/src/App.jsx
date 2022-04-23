import React from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import { Authorization } from './Components/Authorization/Authorization'
import { HeaderContainer } from './Components/Header/HeaderContainer'
import { ProcessListContainer } from './Components/ProcessList/ProcessListContainer'
import { ProfileContainer } from './Components/Profile/ProfileContainer'

const App = () => {
  const isAuth = false
  return (
    <>
      {isAuth ? (
        <Authorization />
      ) : (
        <div>
          <HeaderContainer />
          <div className="container">
            <Routes>
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/process-lists" element={<ProcessListContainer />} />
              <Route path="/" element={<ProfileContainer />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  )
}

export default App
