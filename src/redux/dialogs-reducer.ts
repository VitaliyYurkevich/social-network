import {DialogsPagePropsType, DialogsStatePropsType, MessagesPropsType} from "./store";

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

type sendMessageType = {
    type: 'SEND_MESSAGE'
    newMessageBody: string
}


type ActionType = sendMessageType

export type InitialStateDialogsType = {
    messages: Array<MessagesPropsType>
    dialogs: Array<DialogsStatePropsType>
}

const initialState: InitialStateDialogsType = {
    messages: [],
    dialogs: [],
}

/*const initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hellcat'},
        {id: 4, message: 'Ey'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Ahaha'}
    ],
    dialogs: [
        {id: 1, name: 'item 1'},
        {id: 2, name: 'item 2'},
        {id: 3, name: 'item 3'},
        {id: 4, name: 'item 4'},
        {id: 5, name: 'item 5'},
        {id: 6, name: 'item 6'}
    ],
    newMessageBody: '',
}*/


export const dialogsReducer = (state: DialogsPagePropsType = initialState, action: ActionType) : InitialStateDialogsType => {


    switch (action.type) {

        case SEND_MESSAGE: {
            let stateCopy = {
                ...state,
                messages: [...state.messages, {id: 11, message: action.newMessageBody}]
            }
            return stateCopy
        }
    }

    return state
}

export const sendMessageAC = (newMessageBody: string) => ({
    newMessageBody: newMessageBody,
    type: SEND_MESSAGE
})

