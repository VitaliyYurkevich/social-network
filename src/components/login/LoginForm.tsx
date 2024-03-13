import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


//типо как MapStateToProps


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"login"} component={'input'} name={"login"}/>
                </div>
                <div>
                    <Field placeholder={"password"} component={'input'} name={"password"}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={'input'} name={"rememberMe"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
}) (LoginForm)

