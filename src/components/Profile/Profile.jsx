import React from "react";

import classes from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (        
        <div className={classes.content}>
            <div>
                <img alt="profile-wallpaper" width='100%' src='https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE=' />
            </div>
            <div>
                <img alt="profile-pic" src='https://images.squarespace-cdn.com/content/v1/575a6067b654f9b902f452f4/1552683653140-0UUVQSSUEWVC73AWAEQG/300Logo.png' />
                Profile info
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;