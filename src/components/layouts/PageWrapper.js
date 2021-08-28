import React from "react";
import styled from "styled-components";

function PageWrapper({children}) {
    return (
    <Wrapper>
      <Aside></Aside>
      <FormContainer>
       {children}
      </FormContainer>
      <Aside></Aside>
    </Wrapper>

  );
}

const Wrapper = styled.section`
  display:flex;
`
const FormContainer = styled.section`
  flex: 2;
  margin: 0.8rem;
  width:100%
`
const Aside = styled.aside`
  width: 100%;
  height: 200px;
  flex: 1;
  margin: 0.8rem;
`

export default PageWrapper;
