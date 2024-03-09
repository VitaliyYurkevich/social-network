type setUserDataType = {
    data: AuthPropsType
    type: 'SET_USER_DATA'
}

export type AuthDataType = {
    id: null | number,
    email: null | string,
    login:  null |string
}

export type AuthPropsType = {
    data: AuthDataType
    isAuth: boolean
}


const initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}

type ActionType = setUserDataType

export const authReducer = (state: AuthPropsType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {

                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (email: string, id: null | number, login: string) => ({
    data: {
        email,
        id,
        login
    },
    type: 'SET_USER_DATA'
})