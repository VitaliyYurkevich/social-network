import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {

    //

    /*const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.onNewMessageChange(body)
    }*/

    let onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
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
            <div>
                <div><textarea onChange={onChangeHandler}
                               value={props.dialogsPage.newMessageBody}
                               placeholder={'Enter your message'}
                />
                </div>
                <div>
                    <button onClick={props.sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

