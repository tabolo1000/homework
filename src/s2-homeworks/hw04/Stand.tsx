import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from './common/c2-SuperButton/SuperButton'

const Stand = () => {
    const [stateForAllInputs, setValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const [stateForAllCheckboxes, setChecked] = useState<boolean>(false)
    const [myClass, setClass] = useState<boolean>(false)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError("")
    }
    const prassButHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.code === "Enter" && stateForAllInputs.length === 0){
            setError("Error")
        }
    }

    return (
        <div id={'hw4-stand'} className={s.stand}>
            <div className={s.inputs}>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-like-old'}
                        value={stateForAllInputs}
                        onKeyPress={(e) => prassButHandler(e)}
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                {/*инпут с ошибкой:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-with-error'}
                        value={stateForAllInputs}
                        onChangeText={setValue}
                        style={error ? {borderColor: "#CC1439"}: {}}
                        error={error}
                        onEnter={() => {
                            setError(
                                stateForAllInputs.trim()
                                    ? ''
                                    : 'Error'
                            )
                            setValue('')
                        }}
                    />
                </div>
            </div>

            <div className={s.buttons}>
                {/*обычная кнопка:*/}
                <div>
                    <SuperButton id={'hw4-super-button-default'}
                        // onMouseMove={()=> setClass("")}
                        // className={"default"}
                    >

                        default
                    </SuperButton>
                </div>
                {/*красная кнопка:*/}
                <div>
                    <SuperButton id={'hw4-super-button-red'} xType={'red'}>
                        red
                    </SuperButton>
                </div>
                {/*задизэйбленная кнопка:*/}
                <div>
                    <SuperButton
                        id={'hw4-super-button-disabled'}
                        xType={'red'}
                        disabled
                    >
                        disabled
                    </SuperButton>
                </div>
                {/*задизэйбленная кнопка:*/}
                <div>
                    <SuperButton
                        id={'hw4-super-button-secondary'}
                        xType={'secondary'}
                    >
                        secondary
                    </SuperButton>
                </div>
            </div>

            <div className={s.checkboxes}>
                {/*чекбокс с текстом:*/}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-with-text'}
                        checked={stateForAllCheckboxes}
                        onChangeChecked={setChecked}
                    >
                        some text
                    </SuperCheckbox>
                </div>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-like-old'}
                        checked={stateForAllCheckboxes}
                        onChangeChecked={setChecked}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Stand
