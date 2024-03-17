import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginTC, logoutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";




type MapDispatchPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}

type MapStateToProps = {
    isAuth: boolean | null
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
    }
}

type LoginPropsType = MapStateToProps & MapDispatchPropsType


 const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
       props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        debugger
        return <Redirect to={'/profile'}/>
    }


    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


export default connect(mapStateToProps, {
    loginTC,
    logoutTC
})(Login)