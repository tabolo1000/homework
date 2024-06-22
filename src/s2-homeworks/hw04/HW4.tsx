import React from 'react'
import s2 from '../../s1-main/App.module.css'
import Stand from './Stand'
import {ContentOfLesson, HeaderOfLesson, MainBlockLesson} from "../hw01/HW1";

/*
* 1 - понять (и простить) SuperInputText
* 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
* 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
* 4 - сделать стили в соответствии с дизайном
* */

const HW4 = () => {
    return (
        <MainBlockLesson id={'hw4'}>
            <HeaderOfLesson  className={s2.hwTitle}>Homework #4</HeaderOfLesson >
            {/*демонстрация возможностей компонент:*/}
            <ContentOfLesson className={s2.hw}>
                <Stand />
            </ContentOfLesson>
        </MainBlockLesson>
    )
}

export default HW4
