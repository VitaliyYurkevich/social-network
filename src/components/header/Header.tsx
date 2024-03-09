import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {AuthDataType} from "../../redux/auth-reducer";


type HeaderLocalPropsType = {
    isAuth: boolean
    data: AuthDataType
}

export const Header = (props: HeaderLocalPropsType) => {

    return (
            <header className={classes.header}>
                <img src={'https://cdn-icons-png.flaticon.com/512/3722/3722005.png'} />

                <div className={classes.loginBlock}>

                    {props.isAuth ? <NavLink to={'/login'}>Залогинен{props.data.login}</NavLink>
                        : <NavLink to={'/login'}>Login</NavLink>

                    }

                </div>
            </header>
    );
};

