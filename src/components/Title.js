import React from 'react'
import styled from "styled-components";
export default function Title( {name , title }) {
  return (
    <div className="row">
        <div className="col-10 mx-auto my-2 text-center">
            <Titleone className="text-capitalize font-weight-bold">
                {name} <strong className="text-blue">..... {title}</strong>
            </Titleone>
        </div>
      
    </div>
  )
};
const Titleone = styled.h1`
    color: var(--bluedark);
    font-size: 3.2rem;
    font-family: 'Lobster', cursive;
    strong{
        color: var(--bluelight);
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        
    }
`
