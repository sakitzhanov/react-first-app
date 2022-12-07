import { stopSubmit } from "redux-form";
import { authApi, securityApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth
    }
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const confirm = () => {
    return (dispatch) => {
        return authApi.confirm()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(confirm());
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrl());
                    }
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Common error';
                    dispatch(stopSubmit('login', {_error: message}));
                }
            })
    }
}

export const getCaptchaUrl = () => {
    return (dispatch) => {
        securityApi.getCaptchaUrl()
            .then(response => {
                dispatch(getCaptchaUrlSuccess(response.data.url));
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authApi.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}

export default authReducer;