import React, {useEffect, useRef, useState} from 'react'
import {message0} from '../HW1'
import s from './MessageSender.module.css'
import styled from "styled-components";

// компонента, которая тестирует вашу компоненту (не изменять, any не трогать)
const MessageSender = (props: any) => {
    const M = props.M
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<any>('')

    const onChange = (e: any) => {
        setText(e.currentTarget.value)
    }

    useEffect(() => {
        if (textareaRef?.current) {
            textareaRef.current.style.height = '0px'
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 10 +'px'
        }
    }, [text])

    const addMessage = () => {
        setMessages([
            ...messages,
            {
                id: messages.length ? messages.length + 1 : 1,
                user: message0.user,
                message: {
                    text,
                    time: new Date().toTimeString().slice(0, 5),
                },
            },
        ])
        setTimeout(() => setText(''), 4)
    }

    const onKeyDown = (e: any) => {
        e.key === 'Enter' && e.shiftKey && addMessage()
    }

    return (
        <>
            {messages.map((m) => (
                <M key={'message' + m.id} message={m}/>
            ))}

            <MessageSenderStyled id={'hw1-send-message-form'} className={s.sendForm}>
                <TextAreaStyled
                    id={'hw1-textarea'}
                    // className={s.textarea}
                    ref={textareaRef}
                    rows = {+"20"} cols={+"40"}
                    title={'Shift+Enter for send'}
                    placeholder={'Type your message'}
                    value={text}

                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <ButtonStyled
                    id={'hw1-button'}
                    className={s.button}

                    onClick={addMessage}
                >
                    {/*текст кнопки могут изменить студенты*/}
                    Send
                    {/**/}
                </ButtonStyled>
            </MessageSenderStyled>
        </>
    )
}

const MessageSenderStyled = styled.div`
  display: flex;
`

const TextAreaStyled = styled.textarea`
  display: block;
  height: 40px;
  margin:6px 10px;
  width: 100%;
  border-radius: 20px;
  background: #F5F7FB;
  box-shadow: 0 1px 2px 0 #1D21261A, 0 5px 20px 0 #1D212608;
  padding-left: 10px;
`

const ButtonStyled = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 20px;
  line-height: 20px;
  letter-spacing: 0;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  font-family: Montserrat;
  background: #0066CC;
`

export default MessageSender
