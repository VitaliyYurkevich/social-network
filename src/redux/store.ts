import {dialogsReducer} from "./dialogs-reducer";
import {PostsPropsType, profileReducer, UserProfilePropsType} from "./profile-reducer";

let ADD_POST = 'ADD_POST'
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
let SEND_MESSAGE = 'SEND_MESSAGE'
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

/*let rerenderEntireTree = () => {
    console.log('state changed')
}

export let state: StatePropsType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 1},
            {id: 2, message: 'Hi, how are ?', likeCount: 2},
            {id: 3, message: 'Hi, how  you?', likeCount: 4},
            {id: 4, message: 'Hi,  are you?', likeCount: 3},
            {id: 5, message: 'how are you?', likeCount: 11},
        ],
        newPostText: '',
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hellcat'},
            {id: 4, message: 'Ey'},
            {id: 5, message: 'Yo'},
            {id: 5, message: 'Ahaha'}
        ],
        dialogs: [
            {id: 1, name: 'item 1'},
            {id: 2, name: 'item 2'},
            {id: 3, name: 'item 3'},
            {id: 4, name: 'item 4'},
            {id: 5, name: 'item 5'},
            {id: 6, name: 'item 6'}
        ],
    },
}

export const addPost = () => {
    let newPost = {id: 11, message: state.profilePage.newPostText, likeCount: 11}

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}*/


export type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
    usersProfile: Array<UserProfilePropsType>
}

export type DialogsPagePropsType = {
    messages: Array<MessagesPropsType>
    dialogs: Array<DialogsStatePropsType>
}



export type MessagesPropsType = {
    id: number
    message: string
}

export type DialogsStatePropsType = {
    id: number
    name: string
}