import {AppStateType} from "../../redux/redux-store";
import {
    followAC, getUsersTC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    toggleIsFetchingAC, toggleIsFollowingProgressAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {LoaderInfinity} from "../loader/LoaderInfinity";
import {usersAPI} from "../../api/api";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<boolean | number>
}

type MapDispatchPropsType = {
    getUsersTC: (currentPage: number,pageSize: number ) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (id: number, isFetch: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UserAPIComponent extends React.Component<UsersPropsType> {


    componentDidMount() {

      this.props.getUsersTC(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (currentNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentNumber)
        usersAPI.onPageChanged1(currentNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {

        return <>
           {this.props.isFetching ? <LoaderInfinity/> : null}
            <Users
                followingInProgress={this.props.followingInProgress}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                users={this.props.users}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                totalUserCount={this.props.totalUserCount}
                onPageChanged={this.onPageChanged}
            />
        </>
    }


}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export const UsersContainer = connect(mapStateToProps, {
    getUsersTC,
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUserCount: setTotalUserCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleIsFollowingProgress: toggleIsFollowingProgressAC
})(UserAPIComponent)