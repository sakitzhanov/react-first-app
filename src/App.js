import React from 'react';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends'
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.navbar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/messages/*' element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} changePostText={props.changePostText} />}  />
            <Route path='/news' element={<News />}  />
            <Route path='/music' element={<Music />}  />
            <Route path='/settings' element={<Settings />}  />
            <Route path='/friends' element={<Friends />}  />
          </Routes>
        </div>
      </div>
  )
}

export default App;
