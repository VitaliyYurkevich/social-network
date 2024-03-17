import React from 'react';
import Profile from "./Profile";
import {getProfileTC, getUserStatusTC, updateUserStatusTC, UserProfilePropsType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    userProfile: UserProfilePropsType
    profileStatus: string
    authorizedUserId: null | string
    isAuth: boolean | null
}

type MapDispatchPropsType = {
    getProfileTC: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateUserStatusTC: (profileStatus: string) => void
}

type PathParamsType = {
    userId: string
}

export type ProfileUserPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileUserPropsType

class ProfileContainerC extends React.Component<PropsType> {

    componentDidMount() {
        const userId = this.props.match.params.userId
        if (!userId) {
            return userId === this.props.authorizedUserId
        }
        this.props.getProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }


    render() {
        return (
            <Profile
                userProfile={this.props.userProfile}
                profileStatus={this.props.profileStatus}
                updateUserStatusTC={this.props.updateUserStatusTC}/>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userProfile: state.profilePage.userProfile,
        profileStatus: state.profilePage.profileStatus,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfileTC,
        getUserStatusTC,
        updateUserStatusTC
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainerC)




