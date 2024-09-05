import React, { ChangeEvent, useState } from 'react';
import s from './HW11.module.css';
import s2 from '../../s1-main/App.module.css';
import { restoreState } from '../hw06/localStorage/localStorage';
import SuperRange from './common/c7-SuperRange/SuperRange';

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0));
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100));

    enum range{
        firstRangeBar = value1,
        SeconsdRangeBar = value2,
    }

    const changeHandler = (event: Event, value: number | number[]) => {
        if (typeof value === "object") {
            const [newValue1, newValue2] = value;
            if (newValue1 < value2) {
                setValue1(newValue1);
            }
            else{
                setValue1(newValue1);
                setValue2(value2+1)
            }
            if (newValue2 > value1) {
                setValue2(newValue2);
            }
            else{
                setValue2(newValue2);
                setValue1(newValue1 -1);
            }
        } else {
            if (value < value2) {
                setValue1(value);
            }
            else{
                setValue1(value);
                setValue2(value2+1)
            }
            
        }
    };

    return (
        <div id={'hw11'} className={s2.mainBlock}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            aria-label="first-range-homework"
                            size="small"
                            value={range.firstRangeBar}
                            onChange={changeHandler}
                            // сделать так чтоб value1 изменялось // пишет студент
                        />
                    </div>

                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            aria-label="second-range-homework"
                            size="small"
                            disableSwap
                            value={[range.firstRangeBar, range.SeconsdRangeBar]}
                            onChange={changeHandler}
                            // сделать так чтоб value1/2 изменялось // пишет студент
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HW11;