import { createStore, combineReducers } from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer"
import usersReducer from "./users-reducer"

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer
});

const store = createStore(reducers);

export default store;