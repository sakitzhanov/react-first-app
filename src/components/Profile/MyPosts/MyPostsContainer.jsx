import React from "react";

import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    // const state = props.store.getState();

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState();

                const onAddPost = () => {
                    const action = addPostActionCreator();
                    store.dispatch(action);
                }
            
                const onPostChange = (text) => {
                    const action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return (
                    <MyPosts
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        addPost={onAddPost}
                        updateNewPostText={onPostChange}
                    />
                )
            }}
        </StoreContext.Consumer>  
    )
}

export default MyPostsContainer;