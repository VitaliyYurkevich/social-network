import React from 'react';
import {LoaderInfinity} from "../loader/LoaderInfinity";
import styled from "styled-components";
import imgPapers from "../../assets/images/newsIcon2.png"
const News = () => {

    return (
        <StyledDiv>
           <StyledImg src={imgPapers}  />
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
  //background-color: var(--wrap-bg-color);

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

export default News;