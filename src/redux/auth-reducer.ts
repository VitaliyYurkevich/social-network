import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type setUserDataType = {
    payload: {
        id: null | string
        email: null | string
        login: null | string
        isAuth: null | boolean
    }
    type: 'SET_USER_DATA'
}

type getCaptchaUrlSuccessType = {

    url: string

    type: "GET_CAPTCHA_URL_SUCCESS"
}

export type AuthPropsType = {
    id: null | string
    email: null | string
    login: null | string
    isAuth: null | boolean
    captchaUrl: string
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: ''
}

type ActionType = setUserDataType | getCaptchaUrlSuccessType

export const authReducer = (state: AuthPropsType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth
            }
        }
        case "GET_CAPTCHA_URL_SUCCESS": {
            debugger
            return {
                ...state,
                captchaUrl: action.url
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

export const getCaptchaUrlSuccess = (url: string) => ({
    url,
    type: "GET_CAPTCHA_URL_SUCCESS"
})

export const getAuthUserTC = () => async (dispatch: Dispatch) => {
    //let response = await authAPI.authMe()
    /*if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }*/
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authAPI.authLogin(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthUserTC())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrlTC())
        }
        let message = response.messages.length > 0 ? response.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logoutTC = () => async (dispatch: any) => {
    let response = await authAPI.authLogout()
    if (response.resultCode === 1) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrlTC = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptcha()
    debugger
    let captchaUrl = response.url
    debugger
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}