import {Dispatch} from "redux";
import {getAuthUserTC} from "./auth-reducer";


type initializedSuccessType = {
    initialized: boolean
    type: 'INITIALIZED_SUCCESS'
}

const initialState = {
    initialized: false
}


type ActionType = initializedSuccessType

export const AppReducer = (state: {initialized: boolean} = initialState, action: ActionType) => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS": {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: 'INITIALIZED_SUCCESS'
})

export const initializeAppTC = () => (dispatch: any) => {

  let promise =  dispatch(getAuthUserTC())

   Promise.all([promise]).then(() => {
          dispatch(initializedSuccess())
      })
}

