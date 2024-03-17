import {Dispatch} from "redux";
import {profileAPI} from "../api/api";


type addPostType = {
    type: 'ADD_POST'
    newText: string
}

type updateNewPostType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}

type setUserProfileType = {
    type: 'SET_USER_PROFILE'
    userProfile: UserProfilePropsType
}

type setUserStatusProfileType = {
    type: 'SET_USER_STATUS_PROFILE',
    profileStatus: string
}

export type PostsPropsType = {
    id: number
    message: string
    likeCount: number
}

export type UserProfilePropsType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: null | string
        youtube: null | string
        mainLink: null | string
    }
    photos: {
        small: string
        large: string
    }
}


const initialState = {
    posts: [],
    userProfile: {
        aboutMe:'',
        userId: 2,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        }
    },
    profileStatus: '',
}

export type InitialStateProfileType = {
    posts: Array<PostsPropsType>
    userProfile: UserProfilePropsType
    profileStatus: string
}


type ActionType = addPostType | updateNewPostType | setUserProfileType | setUserStatusProfileType


export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType) => {



    switch (action.type) {
        case 'ADD_POST': {
            let stateCopy = {
                ...state,
                posts: [...state.posts, {id: 11, message: action.newText, likeCount: 11} ]
            }
            return stateCopy
        }
        case 'UPDATE_NEW_POST_TEXT': {
            let stateCopy = {
                ...state,
                newPostText:  action.newText
            }
            return stateCopy
        }
        case "SET_USER_PROFILE": {
            return {...state, userProfile: action.userProfile}
        }
        case "SET_USER_STATUS_PROFILE": {
            return {...state, profileStatus: action.profileStatus}
        }


        default:
            return state
    }
}


export const addPostAC = (newText: string) => ({
    newText: newText,
    type: 'ADD_POST'
})
export const updateNewPostAC = (newText: string) => ({
    type: 'UPDATE_NEW_POST_TEXT', newText: newText
})
export const setUserProfileAC = (userProfile: UserProfilePropsType) => ({
    type: 'SET_USER_PROFILE', userProfile: userProfile
})
export const setUserStatusProfileAC = (profileStatus: string) => ({
    type: 'SET_USER_STATUS_PROFILE', profileStatus: profileStatus
})

export const getProfileTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfileAC(data))
        })
    }
}

export const getUserStatusTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatus(userId).then(data => {
            dispatch(setUserStatusProfileAC(data))
        })
    }
}

export const updateUserStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(data => {

            if(data.resultCode === 0) {
                dispatch(setUserStatusProfileAC(status))
            }
        })
    }
}


