import React from "react";
import styled from "styled-components";


function Button ({children}) {
  return (
    <StyledBtn>
     {children}
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  background-color: rgb(102, 205, 170);
  color: white;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: backgroud-color ease-out 0.35s;
  border-radius: 5px;
  &:disabled {
    background-color: #bdbbbb;
    cursor: not-allowed;
    color: #989393;
  }
  &:hover{
    background-color:#DAF7A6;
    color: black;
  }
`;

export default Button;
