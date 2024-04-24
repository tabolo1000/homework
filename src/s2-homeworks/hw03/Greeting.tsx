import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import { ErrorTextAuthStyled,
     InputMessageStyled,
      PrimaryButton, TextAuthStyled } from '../hw01/HW1';

type GreetingPropsType = {
    name: string;
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void;
    addUser: () => void;
    onBlur: () => void;
    onEnter: (e: KeyboardEvent<HTMLInputElement>)=> void 
    error: string; 
    totalUsers: number;
    lastUserName?: string; 
};



const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    }
) => {
    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <TextAuthStyled> 
        
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </TextAuthStyled>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <InputMessageStyled
                        error={error}
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                    />
                    <PrimaryButton
                    id={'hw3-button'}
                    onClick={addUser}
                    className={s.button}
                    disabled={!name.trim()}
                >
                    Add
                </PrimaryButton>
                    
                </div>
                <ErrorTextAuthStyled id={'hw3-error'} className={s.error}>
                        {error}
                    </ErrorTextAuthStyled>

                
            </div>

            {lastUserName && (
                <div className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting


