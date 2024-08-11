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
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  
`

export default News;