import styled from "styled-components";

export const ButtonMyCart = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background: var(--bluelight);
  border:0.2rem solid var(--bluedark);
  margin: 0.2rem 0.5rem 0.2rem 0 ;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  border-radius: 15px;
  transition: all 0.5s ease-in-out;
  &:hover {
      background: var(--bluedark);
      border:0.15rem solid var(--bluelight);
      color:white;

  }
  &focus {
      outline: none;
  }
  `

  
export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.2rem;
background: transparent;
border:0.2rem solid var(--bluedark);
margin: 0.2rem 0.5rem 0.2rem 0 ;
padding: 0.2rem 0.5rem;
cursor: pointer;
color: black;
border-radius: 15px;
transition: all 0.5s ease-in-out;
&:hover {
    background: var(--bluelight);
    border:0.15rem solid var(--bluedark);
    color:white;

}
&focus {
    outline: none;
}
`