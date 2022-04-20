import s from './Profile.module.css'
import Button from './../common/Button/Button'

export const Profile = () => {
  return (
    <div>
      <div className={s.header}>
        <h1>Борис Годунов. Редактирование</h1>
        <Button>Сохранить</Button>
      </div>
      <div className={s.body}>ddd</div>
    </div>
  )
}
