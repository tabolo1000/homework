import React, { useState } from 'react';
import s from './HW11.module.css';
import s2 from '../../s1-main/App.module.css';
import { restoreState } from '../hw06/localStorage/localStorage';
import SuperRange from './common/c7-SuperRange/SuperRange';

function HW11() {
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0));
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100));

    const change = (event: Event, value: number | number[]) => {
        if (Array.isArray(value)) {
            const [newValue1, newValue2] = value;
            setValue1(newValue1);
            setValue2(newValue2);
        } else {
            setValue1(value);
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
                            value={value1}
                            onChange={change}
                            disableSwap
                            size="small"
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            size="small"
                            disableSwap
                            value={[value1, value2]}
                            onChange={change}
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HW11;