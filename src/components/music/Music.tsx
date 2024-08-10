import React from 'react';
import styled from "styled-components";
import musicImg from "../../assets/images/Turbotext AI Image 2894373 (1).png"

const Music = () => {
    return (
        <StyledDiv>
           <StyledImg src={musicImg} />


        </StyledDiv>
    );
};
const StyledDiv = styled.div`
  // background-color: #ce1919;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
   border-radius: 20px;
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  
`
export default Music;