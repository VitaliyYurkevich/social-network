import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../commons/formControls/FormsControls";
import {required} from "../utils/validators/validators";
import classes from "../commons/formControls/FormsControls.module.css"
import styled from "styled-components";


//типо как MapStateToProps


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl: string

}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                Данные тестового аккаунта:
                Email: free@samuraijs.com

                Password: free
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
               {/* {props.  && <img src={props.active} />}*/}
                <div>
                    <StyledBtn>Login</StyledBtn>
                </div>
            </form>
        </div>
    );
};
const StyledBtn = styled.button`
  height: 30px;
  width: 80px;
  cursor: pointer;
  border: 0;
  background: rgba(1, 175, 199, 0.9);
  box-shadow: 0 5px 15px 0 rgba(12, 226, 255, 0.9);
  transition: 0.5s;
  border-radius: 10px;
  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 20px 40px 0 rgba(12, 226, 255, 0.9);
  }
`
export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

