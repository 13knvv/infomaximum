import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EDIT_USER } from '../../api/EditUser'
import { Profile } from './Profile'
import { useMutation } from '@apollo/client'
import { setCurrentUserAC } from '../../redux/authReducer'

export const ProfileContainer = () => {
  const currentUser = useSelector( state => state.auth.currentUser )
  const [onEditUser] = useMutation(EDIT_USER)
  const [errorMessage, setErrorMessage] = useState('')
  const [isSaved, setIsSaved] = useState(false)
  const dispatch = useDispatch()

  const onSubmitEditUser = (newDataUser) => {
    onEditUser({ variables: { id: currentUser.id,
                              firstName: newDataUser.firstName,
                              secondName: newDataUser.secondName,
                              email: newDataUser.email, 
                              password: newDataUser.password } })
    .then( response => {
      setErrorMessage('')
      dispatch(setCurrentUserAC(response.data.editUser))
      setIsSaved(true)
      setTimeout(() => {
        setIsSaved(false)
      }, 3000)
    })
    .catch((error)=> {
      setErrorMessage(error.message)
    }
      )
  }

  return (
        <Profile currentUser={currentUser} 
                 onSubmitEditUser={onSubmitEditUser}
                 errorMessage={errorMessage}
                 isSaved={isSaved} />
  )
}
