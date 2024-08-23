import React from 'react';
import {
    getProfileTC,
    getUserStatusTC,
    savePhotoTC,
    saveProfileTC,
    updateUserStatusTC,
    UserProfilePropsType
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import AltProfile from "./profileInfo/alternative/AltProfile";


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
    savePhotoTC: (file: File) => void
    saveProfileTC: (profile: UserProfilePropsType) => void
}

type PathParamsType = {
    userId: string | undefined
}

export type ProfileUserPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileUserPropsType

class ProfileContainerC extends React.Component<PropsType> {


    refreshProfile = () => {
        let userId = this.props.match.params.userId /*this.props.match.params.userId*/
        let userid2 = this.props.authorizedUserId

        if (!userId) {
            return   userId === this.props.authorizedUserId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()

    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {

        if(this.props.match.params.userId !== prevProps.match.params.userId) {
          return   this.refreshProfile
        }
    }


    render() {

        return (

            <AltProfile /*{...this.props}*/ saveProfileTC={this.props.saveProfileTC} savePhoto={this.props.savePhotoTC}
                isOwner={!this.props.match.params.userId}
                userProfile={this.props.userProfile}
                profileStatus={this.props.profileStatus}
                updateUserStatusTC={this.props.updateUserStatusTC}
            />
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        // @ts-ignore
        userProfile: state.profilePage.userProfile,
        // @ts-ignore
        profileStatus: state.profilePage.profileStatus,
        // @ts-ignore
        authorizedUserId: state.auth.id,
        // @ts-ignore
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfileTC,
        getUserStatusTC,
        updateUserStatusTC,
        savePhotoTC,
        saveProfileTC
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainerC)




