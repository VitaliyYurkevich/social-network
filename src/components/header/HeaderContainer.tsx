import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthPropsType, getAuthUserTC, logoutTC} from "../../redux/auth-reducer";
import AlternativeHeader from "./AlternativeHeader";

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
       this.props.setAuthUserTC()
    }

    render() {
        return <AlternativeHeader {...this.props}/>
    }
}

export type HeaderPropsType = MapDispatchPropsType & MapStateToProps

type MapDispatchPropsType = {
    setAuthUserTC: () => void
    logoutTC: () => void
}

type MapStateToProps = {
     isAuth: boolean | null
    login: string | null
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
     return {
         isAuth: state.auth.isAuth,
         login: state.auth.login
     }
}

export default connect(mapStateToProps, {
    setAuthUserTC: getAuthUserTC,
    logoutTC
}) (HeaderContainer)