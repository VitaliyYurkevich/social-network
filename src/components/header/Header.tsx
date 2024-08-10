import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import warHammerIcon from "../../assets/images/brand_warhammer_icon_158628.png"
import styled from "styled-components";


export const Header = (props: HeaderPropsType) => {



    return (
            <header className={classes.header}>
                <img src={warHammerIcon} height={60} width={60} />


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
  cursor: pointer;
  border: 0;
  background: rgba(1, 175, 199, 0.9);
  box-shadow: 0 5px 15px 0 rgba(12, 226, 255, 0.9);
  transition: 0.5s;

  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 20px 40px 0 rgba(12, 226, 255, 0.9);
  }
`