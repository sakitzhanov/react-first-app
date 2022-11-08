import React from "react";

import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const state = props.store.getState();

    const onAddPost = () => {
        const action = addPostActionCreator();
        props.store.dispatch(action);
    }

    const onPostChange = (text) => {
        const action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (        
        <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            addPost={onAddPost}
            updateNewPostText={onPostChange}
        />
    )
}

export default MyPostsContainer;