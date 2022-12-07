import React from "react";

import classes from './ProfileInfo.module.css';
import blankPhoto from "../../../assets/images/blank-photo.png";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {
                setEditMode(false);
            });
    }

    return (        
        <div>
            <div>
                <img alt="profile-wallpaper" width='100%' src='https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE=' />              
            </div>
            <div className={classes.descriptionBlock}>
                <img alt="profilePhoto" src={props.profile.photos.large || blankPhoto} className={classes.profilePhoto} />
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                {editMode
                    ? <ProfileDataForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit} />
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditMode={() => setEditMode(true)} />}
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div>
            <div>
                <b>Full name:</b> {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {props.profile.lookingForAJob && <div>
                <b>What kind of job:</b> {props.profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me:</b> {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b> {Object.keys(props.profile.contacts).map((val => <Contact contactTitle={val} contactValue={props.profile.contacts[val]} />))}
            </div>
            <div>
                {props.isOwner && <button onClick={props.activateEditMode}>Edit</button>}
            </div>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div style={{padding: '0px 0px 0px 50px'}}>
            {contactTitle}: <a href={contactValue}>{contactValue}</a>
        </div>
    )
}

export default ProfileInfo;