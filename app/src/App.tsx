import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, Navigate} from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from './api/GetCurrentUser'
import './App.css'
import { Authorization } from './Components/Authorization/Authorization'
import { HeaderContainer } from './Components/Header/HeaderContainer'
import { ProcessListContainer } from './Components/ProcessList/ProcessListContainer'
import { ProfileContainer } from './Components/Profile/ProfileContainer'
import { setCurrentUserAC, setIsAuthAC } from './redux/authReducer'

const App = () => {
  const isAuth = useSelector<any, boolean>( state => state.auth.isAuth)
  const { data, loading } = useQuery(GET_CURRENT_USER)
  const dispatch = useDispatch() 

  useEffect(() => {
    if (data) {
      dispatch(setIsAuthAC(true))
      dispatch(setCurrentUserAC(data.currentUser))
    }
  }, [data])


  return <>
      {
      !isAuth  
          ? ( loading ? null : <Authorization /> ) 
          : (
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
      )}
    </>
}

export default App
