const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

type addPostType = {
    type: 'ADD_POST'
}

type updateNewPostType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}

type setUserProfileType = {
    type: 'SET_USER_PROFILE'
    userProfile: UserProfilePropsType
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
    newPostText: '',
}

export type InitialStateProfileType = {
    posts: Array<PostsPropsType>
    userProfile: UserProfilePropsType
    newPostText: string
}


type ActionType = addPostType | updateNewPostType | setUserProfileType


export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionType) => {



    switch (action.type) {
        case ADD_POST: {
            let newText = state.newPostText
            let stateCopy = {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 11, message: newText, likeCount: 11} ]
            }
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state,
                newPostText:  action.newText
            }
            return stateCopy
        }
        case "SET_USER_PROFILE": {
            return {...state, userProfile: action.userProfile}
        }

        default:
            return state
    }
}


export const addPostAC = () => ({
    type: ADD_POST
})
export const updateNewPostAC = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: newText
})
export const setUserProfileAC = (userProfile: UserProfilePropsType) => ({
    type: SET_USER_PROFILE, userProfile: userProfile
})



