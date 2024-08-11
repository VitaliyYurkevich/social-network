import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import warHammerIcon from "../../assets/images/logoIcon2.png"
import styled from "styled-components";


export const Header = (props: HeaderPropsType) => {

    return (
            <header className={classes.header}>
                <StyledLogo src={warHammerIcon}  />
                <div className={classes.loginBlock}>
                    {props.isAuth
                        ? <div className={classes.userName}><div>{props.login}</div><div>
                            <StyledBtn onClick={props.logoutTC}>Log out</StyledBtn></div></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </header>
    );
};

const StyledBtn = styled.button`
  height: 30px;
  width: 80px;
  cursor: pointer;
  border: 0;
  background: rgba(1, 175, 199, 0.9);
  box-shadow: 0 5px 15px 0 rgba(12, 226, 255, 0.9);
  transition: 0.5s;
  border-radius: 10px;
  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 20px 40px 0 rgba(12, 226, 255, 0.9);
  }
`

const StyledLogo = styled.img`
  
  height: 60px;
  width: 60px;
    //background-color: #ce1919;
`