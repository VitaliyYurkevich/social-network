import React from 'react';
import Profile from "./Profile";
import {setUserProfileAC, UserProfilePropsType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


type MapStatePropsType = {
    userProfile: UserProfilePropsType
}

type MapDispatchPropsType = {
    setUserProfile: (userProfile: UserProfilePropsType) => void
}

type PathParamsType = {
    userId: string
}

export type ProfileUserPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileUserPropsType

class ProfileContainerC extends React.Component<PropsType> {

    componentDidMount() {
        const userId = this.props.match.params.userId
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }


    render() {
        return (
            <Profile userProfile={this.props.userProfile} />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        userProfile: state.profilePage.userProfile
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainerC)

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
}) (WithUrlDataContainerComponent)