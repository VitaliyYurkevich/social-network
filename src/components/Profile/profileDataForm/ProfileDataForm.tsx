import React from 'react';
import {Input, Textarea} from "../../commons/formControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {UserProfilePropsType} from "../../../redux/profile-reducer";
import classes from "../profileInfo/ProfileInfo.module.css";

export const ProfileDataForm: React.FC<InjectedFormProps<FormDataProfileType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div><button>save</button></div>
            <div>
                {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
            </div>
                <div>
                    <b>Full Name: </b> <Field placeholder={"fullName"} component={Input} name={"fullName"}/>
                </div>
                <div>
                    <b>About me:</b> <Field placeholder={"aboutMe"} component={Textarea} name={"aboutMe"}/>
                </div>
                <div>
                    <b>Looking for a job: </b> <Field placeholder={"LookingForAJob"} component={Input} name={"LookingForAJob"} type={'checkbox'}/>
                </div>
                <div>
                        <div><b>My professional skills:</b>
                            <Field placeholder={"lookingForAJobDescription"} component={Textarea} name={"lookingForAJobDescription"}/>
                        </div>
                </div>
                <div>

                    <b>Contacts:</b> {Object.keys(
                    // @ts-ignore
                        props.initialValues.contacts
                ).map(key => {
                    return <div className={classes.contact}>
                    <b>{key}: <Field placeholder={key} component={Input} name={"contacts." + key}/> </b>
                    </div>
                })}
                </div>

        </form>
    )
}

export type FormDataProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob?: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github?: string
        vk?: string
        facebook?: string
        instagram?: string
        twitter?: string
        website?: null | string
        youtube?: null | string
        mainLink?: null | string
    }
    photos: {
        small: string
        large: string
    }
}

export const ProfileReduxForm = reduxForm<FormDataProfileType>({
    form: 'profileEdit'
})(ProfileDataForm)
