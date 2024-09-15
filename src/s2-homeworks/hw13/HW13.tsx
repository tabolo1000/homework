import React, { useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios, { AxiosError, AxiosResponse } from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState<CodeMessage>(CodeMessage.Codedefault);
    const [text, setText] = useState<MessageResultOperation>(MessageResultOperation.MessageDefault);
    const [info, setInfo] = useState<MessageInfo>(MessageInfo.MessageDefault);
    const [image, setImage] = useState<string>('');
    const [disableButton, setDisableButton] = useState<boolean>(false);

    const setRequestState = (code: CodeMessage, text: MessageResultOperation, info: MessageInfo, image: string, disableButton = false) => {
        setCode(code);
        setImage(image);
        setText(text);
        setInfo(info);
        setDisableButton(disableButton)
    }
    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://samurai.it-incubator.io/api/3.0/homework/test'


        setRequestState(
            CodeMessage.Codedefault,
            MessageResultOperation.MessageDefault,
            MessageInfo.MessageLoading,
            '',
            true
        )
        axios
            .post(url, { success: x })
            .then((res: AxiosResponse<DataResponce>) => {
                setRequestState(
                    CodeMessage.Code200,
                    res.data.errorText,
                    res.data.info,
                    success200,
                )
                // дописать
            })
            .catch((e: AxiosError<DataResponce>) => {
                if (e.code === CodeAboutOperation.CodeError) {
                    setRequestState(
                        CodeMessage.CodeError,
                        e.message as MessageResultOperation.MessageError,
                        e.name as MessageInfo.MessageError,
                        errorUnknown,
                    )
                }
                if (e.code === CodeAboutOperation.Code400) {
                    if (e.response) {
                        setRequestState(
                            CodeMessage.Code400,
                            e.response.data.errorText,
                            e.response.data.info,
                            error400,
                        )
                    }
                }
                if (e.code === CodeAboutOperation.Code500) {
                    if (e.response) {
                        setRequestState(
                            CodeMessage.Code500,
                            e.response.data.errorText,
                            e.response.data.info,
                            error500,
                        )
                    }
                }
                // дописать

            })
    }

    return (
        <div id={'hw13'} className={s2.mainBlock}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        disabled={disableButton}
                    // дописать

                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        disabled={disableButton}
                    // дописать

                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        disabled={disableButton}
                    // дописать

                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                        xType={'secondary'}
                        disabled={disableButton}
                    // дописать

                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status" />}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13






//-----------------------------Type__for__HW13--------------------------------------------------------------------



enum MessageResultOperation {
    MessageDefault = ``,
    Message200 = `...всё ок`,
    Message400 = ` Ты не отправил success в body вообще!`,
    Message500 = `эмитация ошибки на сервере`,
    MessageError = `Network Error`,

}
enum CodeAboutOperation {
    Codedefault = '',
    Code200 = 'Код 200!',
    Code500 = "ERR_BAD_RESPONSE",
    Code400 = "ERR_BAD_REQUEST",
    CodeError = "ERR_NETWORK",
};

enum CodeMessage {
    Codedefault = ``,
    Code200 = `Код 200!`,
    Code500 = `Ошибка 500!`,
    Code400 = `Ошибка 400!`,
    CodeError = `Error`,
}

enum MessageInfo {
    MessageDefault = ``,
    MessageLoading = '...loading',
    Message200 = `код 200 - обычно означает что скорее всего всё ок`,
    Message400 = `ошибка 400 - обычно означает что скорее всего фронт отправил что-то не то на бэк!`,
    Message500 = "ошибка 500 - обычно означает что что-то сломалось на сервере, например база данных)",
    MessageError = "AxiosError",
}

type DataResponce = {
    errorText: MessageResultOperation;
    info: MessageInfo;
}