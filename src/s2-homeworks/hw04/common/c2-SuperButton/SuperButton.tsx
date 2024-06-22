import React, {ButtonHTMLAttributes, DetailedHTMLProps, useState} from 'react'
import s from './SuperButton.module.css'
import { U_button } from '../../../../styles/styles'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    // const finalClassName = s.button
    //     + (disabled
    //             ? s.disabled
    //             : xType
    //                 ? s.red : "")
    //     + (className ? ' ' + className : '') // задачка на смешивание классов

    const finalClassName = s.button
        + " " +(disabled
            ? s.disabled
            : xType
                ? s[xType] : s.default)
        + (className ? ' ' + className : ' ')
    return (
        <U_button
            disabled={disabled}
            onClick={restProps.onClick}
            className={finalClassName}
            // active={active}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
