import React from "react";

import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (        
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post postId="1" message='Welcome!' />
                <Post postId="2" message='How are you?' />
                <Post postId="3" message='Call me ASAP' />
            </div>
        </div>
    )
}

export default MyPosts;