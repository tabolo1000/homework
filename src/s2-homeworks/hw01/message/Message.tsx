import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";
import styled from "styled-components";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}
// нужно отобразить приходящие данные
const Message: React.FC<MessagePropsType> = ({message}) => {
    return (
        <BlockMessageStyled id={'hw1-message-' + message.id} className={s.message}>
            <MessageStyled className={s.imageAndText}>
                <img
                    style={{width: "100px"}}
                    id={'hw1-avatar-' + message.id}
                    src={message.user.avatar}
                    alt={"avatar"}
                />
                <BackgroundMessageStyle className={s.text}>
                    <div id={'hw1-name-' + message.id} className={s.name}>
                        <p>{message.user.name}</p>
                    </div>
                    <pre id={'hw1-text-' + message.id} className={s.messageText}>
                        <p>{message.message.text}</p>
                    </pre>
                </BackgroundMessageStyle>
            </MessageStyled>
            <div id={'hw1-time-' + message.id} className={s.time}>
                <p>{message.message.time}</p>
            </div>
        </BlockMessageStyled>
    )
}

export default Message;

export const BackgroundMessageStyle = styled.div`
  box-shadow: 0 1px 2px 0 #1D21261A, 0 5px 20px 0 #1D212608;
  background: #0066CC;

`;

export const BlockMessageStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, auto));
  grid-template-rows: minmax(100px, auto) 20px;
  justify-items: end;

  & > :nth-child(2) {
    grid-area: 2/5;
    align-self: start;
    padding-right: 40px;
    justify-self: end;
  }

`
export const MessageStyled = styled.div`
  padding: 10px;
  display: flex;
  text-align: right;
  align-items: center;
  grid-area: 1/5;

  & > img {
    order: 2;
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }

  & > :nth-child(2) {
    margin-right: 10px;
    padding: 10px;
    border-radius: 20px;
  }
`