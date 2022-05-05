import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EDIT_USER } from '../../api/EditUser'
import { Profile } from './Profile'
import { useMutation } from '@apollo/client'
import { setCurrentUserAC, UserType } from '../../redux/authReducer'

export type NewDataUserType = {
  id: string
  firstName: string
  secondName: string
  email: string
  password: string
}

export const ProfileContainer = () => {
  const user = useSelector<any, UserType>( state => state.auth.user)
  const [onEditUser] = useMutation(EDIT_USER)
  const [errorMessage, setErrorMessage] = useState('')
  const [isSaved, setIsSaved] = useState(false)
  const dispatch = useDispatch()

  const onSubmitEditUser = (newDataUser:  NewDataUserType) => {
    onEditUser({ variables: { id: user.id,
                              firstName: newDataUser.firstName,
                              secondName: newDataUser.secondName,
                              email: newDataUser.email, 
                              password: newDataUser.password } 
    })
      .then( response => {
        setErrorMessage('')
        dispatch(setCurrentUserAC(response.data.editUser))
        setIsSaved(true)
        setTimeout(() => setIsSaved(false), 3000)
      })
      .catch((error)=> {
        setErrorMessage(error.message)
      })
  }
 

  return <Profile user={user} 
                  onSubmitEditUser={onSubmitEditUser}
                  errorMessage={errorMessage}
                  isSaved={isSaved} />
}
