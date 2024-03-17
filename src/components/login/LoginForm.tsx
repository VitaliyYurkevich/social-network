import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../commons/formControls/FormsControls";
import {required} from "../utils/validators/validators";
import classes from "../commons/formControls/FormsControls.module.css"


//типо как MapStateToProps


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[required]} placeholder={"email"} component={Input} name={"email"}/>
                </div>
                <div>
                    <Field validate={[required]} placeholder={"password"} component={Input} name={"password"}
                           type={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={Input} name={"rememberMe"}/> remember me
                </div>
                <div>
                    {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
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
})(LoginForm)

