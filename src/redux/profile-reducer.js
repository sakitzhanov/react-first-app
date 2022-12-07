import { profileApi } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';

const initialState = {
    posts: [
        { id: 1, message: 'Welcome!', likesCount: 20, dislikesCount: 2 },
        { id: 2, message: 'How are you?', likesCount: 100, dislikesCount: 5 },
        { id: 3, message: 'Call me ASAP', likesCount: 13, dislikesCount: 47 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.post.text,
                likesCount: 0,
                dislikesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (post) => {
    return {
        type: ADD_POST,
        post
    }
};

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});

export const saveProfileSuccess = (profileData) => ({
    type: SAVE_PROFILE_SUCCESS,
    profileData
});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
                };
            })
    }
}

export const savePhoto = (file) => {
    return (dispatch) => {
        profileApi.savePhoto(file)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(savePhotoSuccess(data.data.photos));
                };
            })
    }
}

export const saveProfile = (profileData) => {
    return (dispatch, getState) => {
        const userId = getState().auth.userId;
        profileApi.saveProfile(profileData)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getProfile(userId));
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Common error';
                    dispatch(stopSubmit('edit-profile', {_error: message}));
                    return Promise.reject(message);
                }
            })
    }
}

export default profileReducer;