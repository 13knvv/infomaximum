import React from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import { Authorization } from './Components/Authorization/Authorization'
import { Header } from './Components/Header/Header'
import { ProcessLists } from './Components/ProcessLists/ProcessLists'
import { Profile } from './Components/Profile/Profile'

const App = () => {
  const isAuth = false
  return (
    <>
      {isAuth ? (
        <Authorization />
      ) : (
        <div>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/process-lists" element={<ProcessLists />} />
              <Route path="/" element={<Profile />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  )
}

export default App
