import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
/*import {AppStoreType} from './bll/store'*/
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedHooks";

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент
    const {isLoading} = useAppSelector(state => state.loading)
    const dispatch = useAppDispatch()

    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        // dispatch
        dispatch(loadingAC(isLoading))
        setTimeout(()=>{
            dispatch(loadingAC(!isLoading))
        }, 1500)
        // setTimeout
    }

    return (
        <div id={'hw10'} className={s2.mainBlock}>
            <div className={s2.hwTitle}>Homework #10</div>

            <div className={s2.hw}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    )
}

export default HW10
