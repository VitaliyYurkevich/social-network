import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type setUserDataType = {
    payload: {
        id: null | string,
        email: null | string,
        login: null | string
        isAuth: null | boolean
    }
    type: 'SET_USER_DATA'
}

export type AuthPropsType = {
        id: null | string,
        email: null | string,
        login: null | string
        isAuth: null | boolean
}

const initialState = {
        id: null,
        email: null,
        login: null,
        isAuth: false
}

type ActionType = setUserDataType

export const authReducer = (state: AuthPropsType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            debugger
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id: null | string, email: null | number, login: null | string, isAuth: boolean) => ({
    payload: {
        id,
        email,
        login,
        isAuth
    },
    type: 'SET_USER_DATA'
})


export const getAuthUserTC = () => {

    return (dispatch: Dispatch) => {
        authAPI.authMe().then(data => {
            debugger
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {


    authAPI.authLogin(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserTC())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}))
        }
        }
    )
}

export const logoutTC = () => (dispatch: any) => {
    authAPI.authLogout().then(data => {
            if (data.resultCode === 1) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        }
    )
}