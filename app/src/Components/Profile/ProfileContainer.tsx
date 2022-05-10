import React, { useCallback, useState } from 'react'
import { EDIT_USER } from '../../api/EditUser'
import { Profile } from './Profile'
import { useMutation } from '@apollo/client'
import { useStores } from '../../MobX/stores'

export type NewDataUserType = {
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

  const onSubmitEditUser = useCallback( async (newDataUser:  NewDataUserType) => {
    try {
    const response = await onEditUser({ variables: { id: authStore.user.id, ...newDataUser} })
    setErrorMessage('')
    authStore.setCurrentUser(response.data.editUser)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
    } catch(error: any) {
        setErrorMessage(error.message)
    }
  }, [])
 

  return <Profile authStore={authStore} 
                  onSubmitEditUser={onSubmitEditUser}
                  errorMessage={errorMessage}
                  isSaved={isSaved} />
}
