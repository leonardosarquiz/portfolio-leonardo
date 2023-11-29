import styled from 'styled-components';



interface ButtonProps {
  isNone?: boolean;
}

export const Button = styled.button<ButtonProps>`

  background-color: transparent;
  color: #0094FF;
  
  border: none;
  //border-right: ${props => (props.isNone ? 'none' : '1px solid #0094FF')};
  cursor: pointer;
  text-transform: uppercase;
 font-size: 16px;
 font-family: 'Darker Grotesque';
 font-weight: 700;
 margin-right: 6px;
 margin-left: 6px;



 &:hover{
  color: #3E5C9A;
  transition: 1s ease;
 }
 
`;