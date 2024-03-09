import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { AuthPropsType, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

 class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        authAPI.authMe().then(data => {
            if(data.resultCode === 0) {
                let {id, email, login} = data.data
                this.props.setAuthUserData(email, id, login)
            }
        })
    }


    render() {
        return <Header data={this.props.auth.data} isAuth={this.props.auth.isAuth} />
    }
}

export type HeaderPropsType = MapDispatchPropsType & MapStateToProps

type MapDispatchPropsType = {
    setAuthUserData: (email: string, id: null | number, login: string) => void
}

type MapStateToProps = {
     auth: AuthPropsType
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
     return {
         auth: state.auth,
     }
}

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)