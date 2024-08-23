import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {getCaptchaUrlTC, loginTC, logoutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from './style.module.css'

type MapDispatchPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    getCaptchaUrlTC: () => void
}

type MapStateToPropsType = {
    isAuth: boolean | null
    captchaUrl: string
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {


    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

type LoginPropsType = MapStateToPropsType & MapDispatchPropsType

 const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
       props.loginTC(formData.email, formData.password, formData.rememberMe)
    }



    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.loginPage}>
            <div className={s.loginWrap}>
                <div className={s.login}>
            <h2>Login</h2>
            {/*<button onClick={props.getCaptchaUrlTC}>GET CAPTCHA</button>
            <img src={props.captchaUrl}/>*/}
            <LoginReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, {
    loginTC,
    logoutTC,
    getCaptchaUrlTC
})(Login)