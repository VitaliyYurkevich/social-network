import React from 'react';
import styled from "styled-components";
import musicImg from "../../assets/images/musicIcon2.png"

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
  position: relative;
  
`

const StyledImg = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 20px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export default Music;