import {AppStateType} from "../../redux/redux-store";
import {
    followAC, followTC,
    getUsersTC,
    setCurrentPageAC,
    toggleIsFollowingProgressAC,
    unFollowAC, unFollowTC,
    UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {LoaderInfinity} from "../loader/LoaderInfinity";


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
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFollowingProgress: (id: number, isFetch: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UserAPIComponent extends React.Component<UsersPropsType> {


    componentDidMount() {

      this.props.getUsersTC(this.props.currentPage, this.props.pageSize)

    }



    onPageChanged = (currentPage: number) => {
       /* this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentNumber)
        usersAPI.onPageChanged1(currentNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })*/
        this.props.setCurrentPage(currentPage)
        this.props.getUsersTC(currentPage, this.props.pageSize)
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
                followTC={this.props.followTC}
                unFollowTC={this.props.unFollowTC}
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
    followTC,
    unFollowTC,
    setCurrentPage: setCurrentPageAC,
    toggleIsFollowingProgress: toggleIsFollowingProgressAC
})(UserAPIComponent)