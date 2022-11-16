import React from "react";

import classes from './ProfileInfo.module.css';
import blankPhoto from "../../../assets/images/blank-photo.png";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (        
        <div>
            <div>
                <img alt="profile-wallpaper" width='100%' src='https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE=' />                
            </div>
            <div className={classes.descriptionBlock}>
            <img alt="profilePhoto" src={props.profile.photos.small === null ? blankPhoto : props.profile.photos.small} className={classes.profilePhoto} />
                Full name: {props.profile.fullName}
            </div>
        </div>
    )
}

export default ProfileInfo;