import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import logoIcon from '../../assets/images/logoIcon2.png'
import userPhoto from '../../assets/images/user.webp'
import userLogIcon from '../../assets/images/userLogIcon.png'
import s from './style.module.css'
import {logoutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {UserProfilePropsType} from "../../redux/profile-reducer";
import {toggleBlackTheme, toggleDynamicBackground} from "../../redux/settings";

const AlternativeHeader: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { isAuth, login } = useSelector((state: AppStateType) => state.auth)
    const userProfile:UserProfilePropsType = useSelector((state: AppStateType) => state.profilePage)
    const { isBlackThemeActivated, isDynamicBackgroundActivated } = useSelector((state: AppStateType) => state.settings)
    const dispatch = useDispatch()

    const handleLogoutClick = () => {
        dispatch(logoutTC())
        setShowMenu(false)
    }




    return (
        <div className={s.header}>
            <div className={s.headerWrap}>
                <div className={s.mainIcon}>

                    <NavLink to={`/profile${userProfile.userId ? `/${userProfile.userId}` : ''}`} className={s.logoLink}>
                        <img src={logoIcon} alt="" className={s.logo} />
                    </NavLink>
                    <p className={s.title}>

                        SOCIAL NETWORK
                    </p>
                </div>
                {userProfile && (
                    <div>
                        {isAuth ? (
                            <span className={s.isAuthUserBlock}>
                <span className={s.userLogName}>{`${login}`}</span>
                <img
                    className={cn(s.userPhoto)}
                    // @ts-ignore
                    src={userProfile.photos || userPhoto}
                    alt=""
                />
                <img className={s.function} src={userLogIcon} alt="" onClick={() => setShowMenu(!showMenu)} />
              </span>
                        ) : (
                            <NavLink to="/login" className={s.login}>
                                Log in
                            </NavLink>
                        )}
                    </div>
                )}
                {showMenu && (
                    <>
                        <div className={s.overlay} onClick={() => setShowMenu(!showMenu)} />
                        <div className={s.content}>
                            <div className={s.theme}>
                                <span className={s.label}>Night theme</span>
                                <span
                                    onClick={() => dispatch(toggleBlackTheme(isBlackThemeActivated))}
                                    className={cn({ [s.switchOn]: isBlackThemeActivated }, s.button)}
                                />
                            </div>
                            <div className={s.theme}>
                                <span className={s.label}>Dynamic background</span>
                                <span
                                    onClick={() => dispatch(toggleDynamicBackground(isDynamicBackgroundActivated))}
                                    className={cn({ [s.switchOn]: isDynamicBackgroundActivated }, s.button)}
                                />
                            </div>
                            <div className={s.exit} onClick={handleLogoutClick}>
                                Exit from account
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default AlternativeHeader
