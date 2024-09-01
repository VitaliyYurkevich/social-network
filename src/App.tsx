import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import Settings from "./components/settings/Settings";
import Music from "./components/music/Music";
import News from "./components/news/News";
import {UsersContainer} from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {LoaderInfinity} from "./components/loader/LoaderInfinity";
import NavbarAlternative from "./components/navbar/NavbarAlternative";
import './styles/index.css'
import {toggleBlackTheme, toggleDynamicBackground} from "./redux/settings";
import {Particle} from "./components/commons/backGroundEffect/BackGroundEffect";


const DialogsContainer = React.lazy(()=> import("./components/dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(()=> import("./components/Profile/ProfileContainer"))

export class App extends React.Component<AppStateLocalType> {




    componentDidMount() {
        this.props.initializeAppTC()
        window.addEventListener("unhandledrejection", function (reason){
            alert(reason)
        })
    }
    componentWillUnmount() {
        window.addEventListener("unhandledrejection", function (reject){
            alert(reject)
        })
    }
    componentDidUpdate(prevProps: Readonly<AppStateLocalType>, prevState: Readonly<{}>, snapshot?: any) {
         this.props.toggleBlackTheme(localStorage.getItem('black-theme') === 'light')
        this.props.toggleDynamicBackground(localStorage.getItem('dynamic-bg') === 'false')
    }


    render() {
        if(!this.props.initialized){
            return <LoaderInfinity/>
        }

        return (
            <>
                {this.props.isDynamicBackgroundActivated && <Particle />}
                <HashRouter>
                    <div  >
                        <HeaderContainer/>
                        <main>
                            <NavbarAlternative/>
                            <div className='wrapper'>
                                {/*<Route path='/' render={() => <React.Suspense fallback={<div>Loading...</div>}><ProfileContainer/> </React.Suspense>}/>*/}
                                <Route path='/dialogs' render={() => <React.Suspense fallback={<div>Loading...</div>}> <DialogsContainer/> </React.Suspense>} />

                                <Route path='/profile/:userId?' render={() => <React.Suspense fallback={<div>Loading...</div>}> <ProfileContainer/> </React.Suspense>}/>
                                <Route path='/users' render={() => <UsersContainer/>}/>
                                <Route path='/news' component={News}/>
                                <Route path='/music' component={Music}/>
                                <Route path='/settings' component={Settings}/>
                                <Route path='/login' component={Login}/>
                                {/*<Route path='*' render={()=> <div>404 NOT FOUND</div>}/>*/}
                            </div>
                        </main>
                    </div>
                </HashRouter>
            </>


        );
    }
}

type AppStateLocalType = MapDispatchPropsType & MapStatePropsType

type MapDispatchPropsType = {
    initializeAppTC: () => void
    toggleBlackTheme: (theme: boolean) => void
    toggleDynamicBackground: (theme: boolean) => void
}

type MapStatePropsType = {
    initialized: boolean
    isBlackThemeActivated: boolean
    isDynamicBackgroundActivated: boolean
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized,
        isBlackThemeActivated: state.settings.isBlackThemeActivated,
        isDynamicBackgroundActivated: state.settings.isDynamicBackgroundActivated
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(MapStateToProps, {
        initializeAppTC,
        toggleBlackTheme,
        toggleDynamicBackground
    }))(App)