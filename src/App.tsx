import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/settings/Settings";
import Music from "./components/music/Music";
import News from "./components/news/News";
import {UsersContainer} from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App() {



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer  />
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/login' component={Login} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
