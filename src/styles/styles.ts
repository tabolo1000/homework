import styled from "styled-components";

interface ButtonProps {
    width?: string;
    height?: string;
    color?: string;
    fontSize?: string;
    margin?: string;
  }

// const defaultStyles = css<ButtonProps>`


// `

export const U_button = styled.button<ButtonProps>`
    width: ${props => props.width || "116px"};
    height: ${props => props.height || "30px"};
    color: ${props => props.color || "#FFFFFF"};
    font-size: ${props => props.fontSize ? props.width : "12px"};
    margin: ${props => props.margin || "10px 24px 0 0"};
    border-radius: 3px;
`

const getDefault = (prop: string | undefined, defaultValue: string): string => prop || defaultValue;



export const U_span = styled.span<ButtonProps>`
  ${({fontSize, color, margin}) => `
    color: ${getDefault(color, '#0080FF')};
    font-size: ${getDefault(fontSize, '16px')};
    margin: ${getDefault(margin, "0 5px")};
  `}
`;
