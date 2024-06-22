import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import styled from "styled-components";

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */
interface UserType {
    avatar: string,
    name: string,
}

interface LetterType {
    text: string,
    time: string,
}

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number,
    user: UserType
    message: LetterType
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: "https://static.vecteezy.com/system/resources/previews/002/002/297/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg", // можно менять
        name: 'Nik',  // можно менять
    },
    message: {
        text: 'How are you?', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: "https://static.vecteezy.com/system/resources/previews/002/002/297/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg", // можно менять
        name: 'Kamila', // можно менять
    },
    message: {
        text: 'I\'m fine. You?' , // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <MainBlockLesson id={'hw1'}>
            <HeaderOfLesson className={s2.hwTitle}>Homework #1</HeaderOfLesson>
            <ContentOfLesson className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </ContentOfLesson>
        </MainBlockLesson>
    )
}
const COLOR_LINE = "#D9D9D9";


interface InputMessageProps {
    error?: string; // Добавляем опциональное свойство error типа string
  }

export const COLOR_BUTTON = "#0066CC";
 

export const HeaderOfLesson = styled.div`
 font-family: Montserrat;
 font-size: 22px;
 font-weight: 600;
 line-height: 26.82px;
 text-align: left;
 align-self: start;
 padding: 20px 0;
`

export const MainBlockLesson = styled.div`
  padding: 3% 10%;
  //height: 100%;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
`

export const ContentOfLesson = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${COLOR_LINE};
  border-bottom: 1px solid ${COLOR_LINE};

`
export const TextAuthStyled = styled.p`
font-family: Montserrat;
font-size: 14px;
font-weight: 400;
padding: 17.07px 0;
text-align: left;
`
export const ErrorTextAuthStyled = styled(TextAuthStyled)`
    color: #CC0000;    
`

export const InputMessageStyled = styled.input<InputMessageProps>`
    width: 372px;
    height: 36px;
    margin-right: 10px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    padding-left: 5px;
    border: ${(props) => props.error ? "2px solid red" : ""};
`


export const PrimaryButton = styled.button`
width: 78px;
height: 36px;
padding: 5px 24px 5px 24px;
border-radius: 3px 0px 0px 0px;
//opacity: .5px;
border: 1px solid #D9D9D9;
background-color: ${COLOR_BUTTON};
`
export default HW1



