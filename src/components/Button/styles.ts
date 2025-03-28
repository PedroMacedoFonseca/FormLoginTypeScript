import styled from 'styled-components';
import { ButtonProps } from './types';


export const ButtonContainer = styled.button<ButtonProps>`
width: 100%;
height: 42px;
background-color: ${({ disabled }) => (disabled ? "#C1C1C1" : "#FFD700")};
color: ${({ disabled }) => (disabled ? "#FAFAFA" : "#0D0D0D")};
border: 1px solid #E3E3E3;
border-radius: 21px;

&:hover {
  opacity: ${({ disabled }) => (disabled ? 1 : 0.6)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
}

&:disabled {
  cursor: not-allowed;
}
`;