import React from 'react';
import styled from "styled-components";
import settingImg from "../../assets/images/settings.jpg"
const Settings = () => {
    return (
        <StyledDiv>
          <StyledImg src={settingImg} />
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
  object-fit: cover;
  
`
export default Settings;