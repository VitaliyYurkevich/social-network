import React from 'react';
import classes from "./Dialogs.module.css";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../commons/formControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validators/validators";
import {Button} from "@mui/material";

export const Dialogs = (props: DialogsPropsType) => {


    let addNewMessage = (formData: FormDataType) => {
        props.sendMessage(formData.dialog)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.dialogsPage.dialogs.map((d, index) => {

                    return (
                        <DialogItem key={index} name={d.name} id={d.id}/>
                    )
                })}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messages.map((m, index) => {
                    return (
                        <Message key={index} message={m.message}/>
                    )
                })}
            </div>
            <div className={classes.input} >
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};


export type FormDataType = {
    dialog: string
}

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form style={{position: 'fixed'}} onSubmit={props.handleSubmit}>
            <div><Field
                placeholder={'Enter your message'}
                component={Textarea}
                name={'dialog'}
                validate={[required, maxLength50]}
            />
            </div>
            <div>
                <Button type={'submit'} color={'secondary'} variant="contained" >Send message</Button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<FormDataType>({
    form: 'dialog'
})(AddMessageForm)

