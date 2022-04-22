import React from 'react'
import s from './Button.module.css'

const Button = (props) => {
    return (
        <button className={s.button} {...props}>
            {props.children}
        </button>
    )
}

export const ButtonAuth = (props) => {
    return (
        <button className={s.button + ' ' + s.buttonAuth} {...props}>
            {props.children}
        </button>
    )
}


export default Button
