import React from "react";

import classes from '../Dialogs.module.css'

const Message = (props) => {


    return (
        <div className={props.isMine ? classes.message : `${classes.message} ${classes.companionMessage}`}>
            {props.message}
        </div>
    )
}

export default Message;