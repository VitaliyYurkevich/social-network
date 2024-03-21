import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";


export const getUsersS = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUserSuper = createSelector(() => {
    return
})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUserCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}