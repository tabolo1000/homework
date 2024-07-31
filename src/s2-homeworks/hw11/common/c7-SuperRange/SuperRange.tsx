import React from 'react'
import {Slider as SliderN, SliderProps} from '@mui/material'
import { styled } from '@mui/material/styles';




const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange


const Slider = styled(SliderN)(({theme}) => ({
    color: '#00CC22',
    width: '150px',
    height: 4,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 14,
        width: 14,
        backgroundColor: 'currentColor',
        outline: '1px solid currentColor',
        border: '5px solid white',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&::before': {
            display: 'none',
        },
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#8B8B8B',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
    },
}))
