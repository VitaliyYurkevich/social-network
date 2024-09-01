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
  @media (max-width: 678px) {
    bottom: -300px
  }

`

const StyledImg = styled.img`
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`
export default Music;