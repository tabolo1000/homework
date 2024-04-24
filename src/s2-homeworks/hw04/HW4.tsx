import React from 'react'
import s2 from '../../s1-main/App.module.css'
import Stand from './Stand'
import {AllMassageStyled, HeaderStyled, HW1styled} from "../hw01/HW1";

/*
* 1 - понять (и простить) SuperInputText
* 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
* 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
* 4 - сделать стили в соответствии с дизайном
* */

const HW4 = () => {
    return (
        <HW1styled id={'hw4'}>
            <HeaderStyled  className={s2.hwTitle}>Homework #4</HeaderStyled >
            {/*демонстрация возможностей компонент:*/}
            <AllMassageStyled className={s2.hw}>
                <Stand />
            </AllMassageStyled>
        </HW1styled>
    )
}

export default HW4
