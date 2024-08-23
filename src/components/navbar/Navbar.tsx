import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import FeedIcon from '@mui/icons-material/Feed';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';

type activeType = 'profile' | 'dialogs' | 'users' | 'news' | 'music' | 'settings' | ''
export const Navbar = () => {



    const [active, setActive] = useState<activeType>('')


    const handlerClick = (item: activeType) => {
        setActive(item)
    }

    return (

        <StyledNav>
            <StyledDiv  onClick={() => handlerClick('profile')}>
                    <StyledNavLink to={'/profile'}> Profile
                        <StyledMuiIcon color={'inherit'} fontSize={'large'}/>
                    </StyledNavLink>
                {active === 'profile' && <StyledSpan />}
            </StyledDiv>
            <StyledDiv  onClick={() => handlerClick('dialogs')}>

                    <StyledNavLink to={'/dialogs'}> Messages
                        <ChatIcon style={{position: "absolute",paddingLeft: 20, paddingTop: 9}} color={'inherit'} fontSize={'large'}/>
                    </StyledNavLink>
                {active === 'dialogs' && <StyledSpan />}


            </StyledDiv>
            <StyledDiv  onClick={() => handlerClick('users')}>

                    <StyledNavLink to={'/users'}> Users
                        <GroupIcon style={{position: "absolute",paddingLeft: 83, paddingTop: 9}} color={'inherit'} fontSize={'large'}/>
                    </StyledNavLink>
                {active === 'users' && <StyledSpan />}


            </StyledDiv>
            <StyledDiv  onClick={() => handlerClick('news')}>

                    <StyledNavLink to={'/news'}> News
                        <FeedIcon style={{position: "absolute", paddingLeft: 83, paddingTop: 9}} color={'inherit'} fontSize={'large'}/>
                    </StyledNavLink>
                {active === 'news' && <StyledSpan />}

            </StyledDiv>
            <StyledDiv  onClick={() => handlerClick('music')}>
                    <StyledNavLink  to={'/music'}> Music
                        <LibraryMusicIcon  style={{position: "absolute", paddingLeft: 76, paddingTop: 9}} fontSize={'large'}/>
                        {active === 'music' && <StyledSpan />}
                    </StyledNavLink>

            </StyledDiv>
            <StyledDiv  onClick={() => handlerClick('settings')}>

                    <StyledNavLink to={'/settings'}> Settings
                    <SettingsIcon style={{position: "absolute", paddingLeft: 45, paddingTop: 9}} fontSize={'large'}/>
                    </StyledNavLink>
                {active === 'settings' && <StyledSpan />}

            </StyledDiv>
        </StyledNav>


    );
};

const StyledSpan = styled.span`
  content: '';
  display: inline-block;
  width: 200px;
  height: 3px;
  background-color: white;
  position: absolute;
  left: 50%;
  bottom: -4px;
  transform: translateX(-50%);
  
`

const StyledNavLink = styled(NavLink)<{ active?: activeType }>`
  text-decoration: none;
  color: white;
  
  &:hover {
    color: #2fff00;
    text-shadow: #2fff00 1px 0 10px;
    transition: .2s ease-in-out;
    //padding: 10px;
  }
  
  
`

const StyledNav = styled.nav`
  grid-area: n;

  background: #2585C8; /*linear-gradient(180deg, rgba(9, 121, 56, 1) 25%, rgba(9, 121, 56, 1) 50%, rgba(9, 121, 56, 1) 75%);*/
  padding: 20px;
  width: 200px;
  height: 720px;
  border-radius: 20px;
  outline: 3px solid rgba(14, 45, 27, 1);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  

`

const StyledMuiIcon = styled(AccountCircleIcon)`
  position: absolute;
  padding-left: 70px;
  padding-top: 9px;
`

const StyledDiv = styled.div`
  color: black;
  text-decoration: none;
  width: 100%;

  font-size: 34px;
  display: flex /*inline-block*/;
  //border-radius: 10px;
  position: relative;
  cursor: pointer;
  //background-color: #00bcd5;

  &:hover {


    //background-color: #fccf00;
    //transition-duration: 0.7s;
    // text-align: center;
    //cursor: pointer;
    //color: black;
    //transform: translateX(20px);
    //border-radius: 10px;
    img {

      transition: .2s ease-in-out;
      filter: drop-shadow(0 0 10px #1dfa02);
      // display: inline;
    }
  }

  &:active {
    color: #ff0000;
  }
`

const StyledA = styled.a`
  //color: #ffffff;


`

const StyleImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  // opacity: 0;
  //margin-top: 20px;
  //background-color: #2fff00;
  margin-left: 70px;
  display: flex;

  //display: none;
  //left: 0;
  //opacity: 1;
  //transition:  0.3s ease;
  //:hover {
  //  opacity: 1;
  //}
`