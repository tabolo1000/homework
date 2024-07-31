import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'


/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))
    const [inp, setInp] = useState("")

    const minDistance = 1;
    const change = (event: any, value: any) => {
        if(Array.isArray(value)){
            if(event.target !== null){
                debugger
                //setValue1(event.target.value[0])
                setValue2(event.target.value[1])
            }
            return
        }
        setValue1(event.target.value)
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
    }


    return (
        <div id={'hw11'} className={s2.mainBlock}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value = {value1}
                            onChange={change}
                            disableSwap
                            size={"small"}
                            // сделать так чтоб value1 изменялось // пишет студент
                        />
                    </div>

                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            size={"small"}
                            disableSwap
                            value = {[value1, value2]}
                            onChange = {ev => change(ev, [value1, value2])}
                            // сделать так чтоб value1/2 изменялось // пишет студент

                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
