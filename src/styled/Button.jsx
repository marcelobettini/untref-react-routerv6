import styled from "styled-components";
export const Button = styled.button`
cursor:pointer;
width: 5rem;
height: 2.5rem;
font-size: 1rem;
background-color: burlywood;
border-radius: 10px;
transition-duration: 250ms;
transition-timing-function: ease-out;
box-shadow: 1px 1px 3px;
border:none
;

&:hover {
  transform: scale(1.1);
  box-shadow: 3px 3px 6px;
}
`;