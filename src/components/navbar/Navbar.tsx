import React, {useState} from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import styled, {css} from "styled-components";
import icon from "../../assets/images/Ankh_triarch.webp"

export const Navbar = () => {

    type activeType = 'profile' | 'dialogs' | 'users' | 'news' | 'music' | 'settings' | ''

    const [active, setActive] = useState<activeType>('')


    const handlerClick = (item:activeType) => {
        setActive(item)
    }

    return (

        <StyledNav >
            <StyledDiv onClick={() => handlerClick('profile')}>
                <StyledA className={classes.item}>
                    <NavLink to={'/profile'} > Profile </NavLink>
                </StyledA>
                {active === 'profile' && <StyleImg width={50} height={50} src={icon} />}
            </StyledDiv>
            <StyledDiv  onClick={() => handlerClick('dialogs')} >
            <StyledA className={classes.item}>
                <NavLink to={'/dialogs'}> Messages </NavLink>
                {active === 'dialogs' && <StyleImg width={50} height={50} src={icon} />}
            </StyledA>
            </StyledDiv>
            <StyledDiv  onClick={() => handlerClick('users')} >
            <StyledA className={classes.item}>
                <NavLink to={'/users'}> Users </NavLink>
                {active === 'users' && <StyleImg width={50} height={50} src={icon} />}
            </StyledA>
            </StyledDiv>
                <StyledDiv  onClick={() => handlerClick('news')} >
            <StyledA className={classes.item}>
                <NavLink to={'/news'}> News </NavLink>
                {active === 'news' && <StyleImg width={50} height={50} src={icon} />}
            </StyledA>
                </StyledDiv>
                    <StyledDiv  onClick={() => handlerClick('music')} >
            <StyledA className={classes.item}>
                <NavLink to={'/music'}> Music </NavLink>
                {active === 'music' && <StyleImg width={50} height={50} src={icon} />}
            </StyledA>
                    </StyledDiv>
                        <StyledDiv  onClick={() => handlerClick('settings')} >
            <StyledA className={classes.item}>
                <NavLink to={'/settings'}> Settings </NavLink>
                {active === 'settings' && <StyleImg width={50} height={50} src={icon} />}
            </StyledA>
                        </StyledDiv>
        </StyledNav>


    );
};

const StyledNav = styled.nav`
  grid-area: n;

  background: #3d4646; /*linear-gradient(180deg, rgba(9, 121, 56, 1) 25%, rgba(9, 121, 56, 1) 50%, rgba(9, 121, 56, 1) 75%);*/
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

const StyledDiv = styled.div`
  color: #ffffff;
  text-decoration: none;
  width: 100%;

  font-size: 34px;
  display: flex /*inline-block*/;
  //border-radius: 10px;
  position: relative;
  cursor: pointer;
  // background-color: #00bcd5;

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