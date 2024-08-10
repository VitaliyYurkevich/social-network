import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {FormDataProfileType} from "../components/Profile/profileDataForm/ProfileDataForm";
import {stopSubmit} from "redux-form";


export type addPostType = {
    type: 'ADD_POST'
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

type deletePostType = {
    type: 'DELETE_POST'
    postId: number
}

type savePhotoType = {
    type: 'SAVE_PHOTO'
    file: File
}

type saveProfileType = {
    type: 'SAVE_PROFILE',
    profile: UserProfilePropsType
}

export type PostsPropsType = {
    id: number
    message: string
    likeCount: number
}

export type UserProfilePropsType = {
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


const initialState = {
    posts: [],
    userProfile: {
        aboutMe: '',
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


type ActionType =
    addPostType
    | setUserProfileType
    | setUserStatusProfileType
    | deletePostType
    | savePhotoType
    | saveProfileType


export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType) => {


    switch (action.type) {
        case 'ADD_POST': {
            let stateCopy = {
                ...state,
                posts: [...state.posts, {id: 11, message: action.newText, likeCount: 11}]
            }
            debugger
            return stateCopy
        }
        case "SET_USER_PROFILE": {
            return {...state, userProfile: action.userProfile}
        }
        case "SET_USER_STATUS_PROFILE": {
            return {...state, profileStatus: action.profileStatus}
        }
        case "DELETE_POST": {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case "SAVE_PHOTO": {
            return {...state, userProfile: {...state.userProfile, photos: action.file}}
        }

        default:
            return state
    }
}

export const addPostAC = (newText: string) => ({
    newText: newText,
    type: 'ADD_POST'
})

export const setUserProfileAC = (userProfile: UserProfilePropsType) => ({
    type: 'SET_USER_PROFILE', userProfile: userProfile
})
export const setUserStatusProfileAC = (profileStatus: string) => ({
    type: 'SET_USER_STATUS_PROFILE', profileStatus: profileStatus
})

export const deletePostAC = (postId: number) => ({
    type: 'DELETE_POST',
    postId: postId
})

export const savePhotoAC = (file: File) => ({
    type: 'SAVE_PHOTO',
    file: file
})



export const getProfileTC = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(response))
}

export const getUserStatusTC = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatusProfileAC(response))
}

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setUserStatusProfileAC(status))
    }
}

export const savePhotoTC = (file: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.resultCode === 0) {
        dispatch(savePhotoAC(response.data.photos))
    }
}

//добавить режим редакитрования для setEditMode

export const saveProfileTC = (profile: UserProfilePropsType) => async (dispatch: any) => {
    const userId = profile.userId.toString()
    const response = await profileAPI.saveProfile(profile)

    if (response.resultCode === 0) {
        dispatch(getProfileTC(userId))
    } else  {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error"
        dispatch(stopSubmit("profileEdit", {_error: message}))
       // return Promise.reject(response.messages[0])
    }
}




