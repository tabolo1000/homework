import React, { useState } from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s2 from '../../s1-main/App.module.css'
import s from './HW7.module.css'
import { ContentOfLesson, MainBlockLesson, HeaderOfLesson } from '../hw01/HW1'
import styled from 'styled-components'

/*
* 1 - в файле SuperSelect.tsx дописать логику функции onChangeCallback
* 2 - в файле SuperRadio.tsx дописать логику функции onChangeCallback
* 3 - в файле SuperRadio.tsx дописать name, checked, value (узнать для чего в радио name)
* 4 - сделать стили в соответствии с дизайном
* */

const arr = [
    { id: 1, value: 'Pre-junior' },
    { id: 2, value: 'Junior' },
    { id: 3, value: 'Junior+' },
] // value может быть изменено

const HW7 = () => {
    const [value, onChangeOption] = useState<number>(1) // селект и радио должны работать синхронно

    return (
        <MainBlockLesson id={'hw7'}>
            <HeaderOfLesson className={s2.hwTitle}>Homework #7</HeaderOfLesson>

            {/*демонстрация возможностей компонент:*/}
            <ContentOfLesson className={s2.hw}>
                <StyleBlock className={s.container}>
                    <div>
                        <SuperSelect
                            id={'hw7-super-select'}
                            options={arr}
                            value={value}
                            onChangeOption={onChangeOption}
                        />
                    </div>
                    <div>
                        <SuperRadio
                            id={'hw7-super-radio'}
                            name={'hw7-radio'}
                            options={arr}
                            value={value}
                            onChangeOption={onChangeOption}
                        />
                    </div>
                </StyleBlock>
            </ContentOfLesson>
        </MainBlockLesson>
    )
}


const StyleBlock = styled.div`
    display: flex
`
// export const StyleCheckBox  = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding: 0 0 0 100px;
//     & > input{
//         padding: 100px 0 0 0;
//         color: red;
//     }
// `
export const StyleCheckBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-left:100px;  
    label {
        padding-top: 10px ; 
    }
    span { 
        padding-left: 5px
    }
`;

export default HW7
