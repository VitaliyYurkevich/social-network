import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../commons/formControls/FormsControls";
import {required} from "../utils/validators/validators";
import classes from "../commons/formControls/FormsControls.module.css"
import s from "./style.module.css"


//типо как MapStateToProps


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl: string

}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
            <form className={s.login} onSubmit={props.handleSubmit}>
                Данные тестового аккаунта: <br/>

                Email: free@samuraijs.com <br />

                Password: free
                <div>
                    <Field validate={[required]} placeholder={"email"} component={Input} name={"email"}/>
                </div>
                <div>
                    <Field validate={[required]} placeholder={"password"} component={Input} name={"password"}
                           type={'password'}/>
                </div>
                <div style={{display: 'flex'}}>
                    <Field type={'checkbox'} component={Input} name={"rememberMe"}/> <div style={{marginLeft: 20, marginTop: 10}}>remember me</div>
                </div>
                <div>
                    {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
                </div>
               {/* {props.  && <img src={props.active} />}*/}
                <div>
                    <button className="button button--primary" type="submit">Login</button>
                </div>
            </form>
    );
};
/*const StyledBtn = styled.button`
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
const StyledInput = styled(Field)`
  display: block;
  width: 200px;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`*/

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

