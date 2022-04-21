import React from 'react'
import s from './Profile.module.css'
import Button from '../common/Button/Button'
import { ProfileFormEdit } from './ProfileFormEdit/ProfileFormEdit'

export const Profile = () => {
  return (
    <div>
      <div className={s.header}>
        <h1>Борис Годунов. Редактирование</h1>
        <Button type="submit" form="profileFormEdit">
          Сохранить
        </Button>
      </div>
      <div className={s.body}>
        <ProfileFormEdit />
      </div>
    </div>
  )
}
