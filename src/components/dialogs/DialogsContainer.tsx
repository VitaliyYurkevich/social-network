import React from 'react';
import {Dialogs} from "./Dialogs";
import {InitialStateDialogsType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    dialogsPage: InitialStateDialogsType
}

type MapDispatchPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        dialogsPage: state.dialogsPage
    }
}


export const DialogsContainer = connect(mapStateToProps, {
    sendMessage: sendMessageAC,
    updateNewMessageBody: updateNewMessageBodyAC
}) (Dialogs)

