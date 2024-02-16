import React from 'react'
import s from './FriendMessage.module.css'
import {BackgroundMessageStyle, BlockMessageStyled, MessagePropsType, MessageStyled} from "../message/Message";
import styled from "styled-components";


const FriendMessage: React.FC<MessagePropsType> = ({message}) => {
    return (
        <BlockMessageFriendStyled
            id={'hw1-friend-message-' + message.id}
            className={s.friendMessage}
        >
            <FriendMessageStyled className={s.friendImageAndText}>
                <img
                    alt={"avatar"}
                    style={{width: "100px"}}
                    id={'hw1-friend-avatar-' + message.id}
                    src={message.user.avatar}
                />
                <BackgroundMessageFriendStyle className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + message.id}
                        className={s.friendName}
                    >
                        <p>{message.user.name}</p>
                    </div>
                    <pre
                        id={'hw1-friend-text-' + message.id}
                        className={s.friendMessageText}
                    >
                        <p>{message.message.text}</p>
                    </pre>
                </BackgroundMessageFriendStyle>
            </FriendMessageStyled>
            <div
                id={'hw1-friend-time-' + message.id}
                className={s.friendTime}
            >
                <p>{message.message.time}</p>
            </div>
        </BlockMessageFriendStyled>
    )
}

const BackgroundMessageFriendStyle = styled(BackgroundMessageStyle)`
  background: #F5F7FB;
`

const BlockMessageFriendStyled = styled(BlockMessageStyled)`
  justify-items: left;
  & > :last-child {
    grid-area: 2/1;
    justify-self: start;
    padding-left: 38px;
  }
`

const FriendMessageStyled = styled(MessageStyled)`
  grid-area: 1/1;
  text-align: left;
  & > img{
    order: -1;
    padding-right: 10px;
  }
`

export default FriendMessage
