import React, {useState} from 'react';
import styled from "styled-components";
import settingImg from "../../assets/images/settingsIcon.png"
import s from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {toggleBlackTheme, toggleDynamicBackground} from "../../redux/settings";
import cn from 'classnames'
import {AppStateType} from "../../redux/redux-store";
import {createTheme, Switch, ThemeProvider} from "@mui/material";




const Settings: React.FC = () => {


    const { isBlackThemeActivated, isDynamicBackgroundActivated } = useSelector((state: AppStateType) => state.settings)
    const dispatch = useDispatch()

    return (
        <div className={s.settings}>
            <div className={s.settingsItem}>
                <span className={s.label}>Night theme</span>
                <span
                    onClick={() => dispatch(toggleBlackTheme(isBlackThemeActivated))}
                    className={cn({ [s.switchOn]: isBlackThemeActivated }, s.button)}
                />
            </div>
            <div className={s.settingsItem}>
                <span className={s.label}>Dynamic background</span>
                <span
                    onClick={() => dispatch(toggleDynamicBackground(isDynamicBackgroundActivated))}
                    className={cn({ [s.switchOn]: isDynamicBackgroundActivated }, s.button)}
                />
            </div>
        </div>
    )

}
/*const StyledDiv = styled.div`
  // background-color: #ce1919;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border-radius: 20px;
`

const StyledImg = styled.img`
  width: 700px;
  height: 700px;
  border-radius: 20px;
  object-fit: cover;
  padding-left: 70px;
  padding-top: 30px;
`*/
export default Settings;