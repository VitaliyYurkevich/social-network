import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {AppReducer} from "./app-reducer";
import {settingsReducer} from "./settings";


const RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: AppReducer,
    settings: settingsReducer
})

export const store = createStore(RootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof RootReducer>