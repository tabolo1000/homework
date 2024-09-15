import React, { useCallback, useEffect } from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeId } from './bll/themeReducer'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedHooks'

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер ++++++
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    { id: 1, value: 'light' },
    { id: 2, value: 'blue' },
    { id: 3, value: 'dark' },
]

const HW12 = () => {
    // взять ид темы из редакса
    const themeId = useAppSelector<number>(state => state.theme.themeId)
    const dispatch = useAppDispatch()
    //const themeId = 1

    const change = useCallback((id: number) => { // дописать функцию
        dispatch(changeThemeId(id))
    }, [changeThemeId])

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + '' //!Cool!
    }, [themeId])

    return (
        <div id={'hw12'} className={s2.mainBlock}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes}
                    onChangeOption={change}
                    value={themeId}
                // сделать переключение тем

                />
            </div>
        </div>
    )
}

export default HW12


//------------------------HW12_Type---------------------------


export type Theme = {
    id: number,
    value: string | number,
}


