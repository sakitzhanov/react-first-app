import React, { Suspense } from 'react';
import { connect } from "react-redux";

import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends'
import { Navigate, Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert('Error!');
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>            
            <Route path='*' element={<div>404</div>} />
            <Route path='/' element={<Navigate to={'/profile'} />} />
            <Route
              path='/messages/*'
              element={
                withSuspense(DialogsContainer)
              }
            />
            <Route path='/profile'>
              <Route index element={withSuspense(ProfileContainer)} />
              <Route path=':userId' element={withSuspense(ProfileContainer)} />
            </Route>
            {/* <Route
              path='/profile/:userId'
              element={
                <ProfileContainer />
              }
            /> */}
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/friends' element={<Friends />} />
            <Route
              path='/users'
              element={
                <UsersContainer />
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/login/google' element={<div>O_O</div>} />
          </Routes>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);