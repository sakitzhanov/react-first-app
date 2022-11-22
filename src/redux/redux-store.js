import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;