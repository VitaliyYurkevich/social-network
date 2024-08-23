import {Dispatch} from "redux";
import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

type setUsersType = {
    type: 'SET_USERS'
    users: Array<UserType>
}

type followUserType = {
    userId: number
    type: 'FOLLOW_USER'
}

type unFollowUserType = {
    userId: number
    type: 'UNFOLLOW_USER'
}

type setCurrentPage = {
    currentPage: number
    type: 'SET_CURRENT_PAGE'
}

type setUsersCount = {
    totalCount: number
    type: 'SET_TOTAL_USERS_COUNT'
}

type toggleIsFetching = {
    isFetching: boolean
    type: 'TOGGLE_IS_FETCHING'
}

type toggleIsFollowingProgress = {
    id: number
    isFetch: boolean
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
}

export type UserType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}


type ActionType =
    setUsersType
    | followUserType
    | unFollowUserType
    | setCurrentPage
    | setUsersCount
    | toggleIsFetching
    | toggleIsFollowingProgress

const initialState: InitialStateUsersType = {
    users: [] as Array<UserType>,
    pageSize: 8,
    totalUserCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [true, 1]
}

export type InitialStateUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<boolean | number>
}


export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionType): InitialStateUsersType => {
    switch (action.type) {
        case "FOLLOW_USER": {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, {followed: true})
            }
        }
        case "UNFOLLOW_USER": {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, {followed: false})
            }
        }
        case "SET_USERS": {

            return {...state, users: action.users}

        }
        case "SET_CURRENT_PAGE": {

            return {...state, currentPage: action.currentPage}

        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUserCount: action.totalCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetch ?
                    [...state.followingInProgress, action.id] :
                    state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({
    userId: userId,
    type: 'FOLLOW_USER'
})

export const unFollowAC = (userId: number) => ({
    userId: userId,
    type: 'UNFOLLOW_USER'
})

export const setUsersAC = (users: Array<UserType>) => ({
    users: users,
    type: 'SET_USERS'
})

export const setCurrentPageAC = (currentPage: number) => ({
    currentPage: currentPage,
    type: 'SET_CURRENT_PAGE'
})

export const setTotalUserCountAC = (totalCount: number) => ({
    totalCount: totalCount,
    type: 'SET_TOTAL_USERS_COUNT'
})

export const toggleIsFetchingAC = (isFetching: boolean) => ({
    isFetching: isFetching,
    type: 'TOGGLE_IS_FETCHING'
})

export const toggleIsFollowingProgressAC = (id: number, isFetch: boolean) => ({
    id: id,
    isFetch: isFetch,
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
} as const)


export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetchingAC(true))
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUsersAC(response.items))
    dispatch(setTotalUserCountAC(response.totalCount))
}


export const followTC = (userId: number) => async (dispatch: Dispatch) => {
    let response = await followAPI.postFollow(userId)
    dispatch(toggleIsFollowingProgressAC(userId, true))
    if (response.resultCode === 0) {
        dispatch(followAC(userId))
    }
    dispatch(toggleIsFollowingProgressAC(userId, false))
}


export const unFollowTC = (userId: number) => async (dispatch: Dispatch) => {
    let response = await followAPI.deleteFollow(userId)
    dispatch(toggleIsFollowingProgressAC(userId, true))
    if (response.resultCode === 0) {
        dispatch(unFollowAC(userId))
    }
    dispatch(toggleIsFollowingProgressAC(userId, false))
}


