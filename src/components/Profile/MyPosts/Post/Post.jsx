import React from "react";

import classes from './Post.module.css';

const Post = (props) => {
    return (        
        <div className={classes.item}>
            <img width="50px" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
            Post №{props.postId}. {props.message}
            <div>
                <button>Like ({props.likesCount})</button>
                <button>Dislike ({props.dislikesCount})</button>
            </div>
        </div> 
    )
}

export default Post;