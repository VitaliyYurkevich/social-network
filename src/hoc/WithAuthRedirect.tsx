import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean | null
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        // @ts-ignore
        isAuth: state.auth.isAuth
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {

   const RedirectComponent = (props: MapStatePropsType) => {

       const {isAuth, ...resProps} = props

       if(!isAuth) return <Redirect to={'/login'} />

       return <Component {...resProps as T} />
   }

   const ConnectedRedirectComponent = connect(mapStateToProps) (RedirectComponent)

   return ConnectedRedirectComponent
};
