import s from './Login.module.css'
import logoProceset from '../../assets/svg/logoProceset.svg'

export const Login = () => {
  return (
    <div className={s.wrapp}>
      <div className={s.logo}><img src={logoProceset} alt="Proceset" /></div>
      <div className={s.loginForm}>
        login
      </div>
    </div>
  )
}
