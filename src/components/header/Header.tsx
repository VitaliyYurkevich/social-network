import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";


export const Header = (props: HeaderPropsType) => {

    return (

            <header className={classes.header}>
                <img src={'https://cdn-icons-png.flaticon.com/512/3722/3722005.png'} />

                <div className={classes.loginBlock}>

                    {props.isAuth
                        ? <div>{props.login}<button onClick={props.logoutTC}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>

                    }
                </div>
            </header>
    );
};

