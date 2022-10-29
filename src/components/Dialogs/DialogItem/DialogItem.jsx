import React from "react";
import { NavLink } from "react-router-dom";

import classes from '../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img className={classes.dialogImage} width="50px" src={props.profilePicture} />
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;