import React from 'react';
import {Dialogs} from "./Dialogs";
import {InitialStateDialogsType, sendMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    dialogsPage: InitialStateDialogsType
    isAuth: boolean | null
}

type MapDispatchPropsType = {
    sendMessage: (body: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        sendMessage: sendMessageAC
    })
) (Dialogs)


