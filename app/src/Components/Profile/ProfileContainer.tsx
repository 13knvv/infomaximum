import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EDIT_USER } from '../../api/EditUser'
import { Profile } from './Profile'
import { useMutation } from '@apollo/client'
import { useStores } from '../../MobX/stores'

export type NewDataUserType = {
  id: string
  firstName: string
  secondName: string
  email: string
  password: string
}

export const ProfileContainer = () => {
  const { authStore } = useStores()
  const [onEditUser] = useMutation(EDIT_USER)
  const [errorMessage, setErrorMessage] = useState('')
  const [isSaved, setIsSaved] = useState(false)

  const onSubmitEditUser = useCallback((newDataUser:  NewDataUserType) => {
    onEditUser({ variables: { id: authStore.user.id,
                              firstName: newDataUser.firstName,
                              secondName: newDataUser.secondName,
                              email: newDataUser.email, 
                              password: newDataUser.password } 
    })
      .then( response => {
        setErrorMessage('')
        authStore.setCurrentUser(response.data.editUser)
        setIsSaved(true)
        setTimeout(() => setIsSaved(false), 3000)
      })
      .catch((error)=> {
        setErrorMessage(error.message)
      })
  }, [])
 

  return <Profile authStore={authStore} 
                  onSubmitEditUser={onSubmitEditUser}
                  errorMessage={errorMessage}
                  isSaved={isSaved} />
}
