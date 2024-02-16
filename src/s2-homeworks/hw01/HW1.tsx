import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
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
        <HW1styled id={'hw1'}>
            <HeaderStyled className={s2.hwTitle}>Homework #1</HeaderStyled>
            <AllMassageStyled className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </AllMassageStyled>
        </HW1styled>
    )
}
const COLOR_LINE = "#D9D9D9";

const HeaderStyled = styled.div`
  align-self: start;
  padding: 20px 0;
`

const HW1styled = styled.div`
  padding: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
`

const AllMassageStyled = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${COLOR_LINE};
  border-bottom: 1px solid ${COLOR_LINE};
`

export default HW1
