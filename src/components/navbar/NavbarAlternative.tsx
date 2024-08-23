import React from 'react';
import s from './NavbarAlternative.module.css'
import {NavLink} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from "@mui/icons-material/Chat";
import GroupIcon from "@mui/icons-material/Group";
import FeedIcon from "@mui/icons-material/Feed";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SettingsIcon from "@mui/icons-material/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logoutTC} from "../../redux/auth-reducer";

const NavbarAlternative = () => {

    const {isAuth, id} = useSelector((state: AppStateType) => state.auth)
    const dispatch = useDispatch()

    return (
        <div className={s.navbar} >
            <NavLink
                exact
                to={`/profile${id ? `/${id}` : ''}`}
                className={s.link}
                activeClassName={s.activeItem}
            >
                <AccountCircleIcon color={'inherit'} fontSize={'large'}/>
                <span className={s.item}>My Profile</span>
            </NavLink>
            <NavLink to="/dialogs" className={s.link} activeClassName={s.activeItem}>
                <ChatIcon  color={'inherit'} fontSize={'large'}/>
                <span className={s.item}>Messages</span>
            </NavLink>
            <NavLink to="/users" className={s.link} activeClassName={s.activeItem}>
                <GroupIcon  color={'inherit'} fontSize={'large'}/>
                <span className={s.item}>Users</span>
            </NavLink>
            <NavLink to="/news" className={s.link} activeClassName={s.activeItem}>
                <FeedIcon  color={'inherit'} fontSize={'large'}/>
                <span className={s.item}>News</span>
            </NavLink>
            <NavLink to="/music" className={s.link} activeClassName={s.activeItem}>
                <LibraryMusicIcon  color={'inherit'} fontSize={'large'}/>
                <span className={s.item}>Music</span>
            </NavLink>
            <NavLink to="/settings" className={s.link} activeClassName={s.activeItem}>
                <SettingsIcon  color={'inherit'} fontSize={'large'}/>
                <span className={s.item}>Settings</span>
            </NavLink>
            {isAuth && (
                <div className={`${s.link} ${s.hideOnMobile} ${s.itemLogout}`} onClick={() => dispatch(logoutTC())}>

                    <span className={s.item}>Exit from account</span>
                </div>
            )}

        </div>
    );
};

export default NavbarAlternative;