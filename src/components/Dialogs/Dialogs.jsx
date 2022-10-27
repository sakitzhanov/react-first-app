import React from "react";
import { NavLink } from "react-router-dom";

import classes from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    
    const dialogs = [
        {id: 1, name: 'Asset'},
        {id: 2, name: 'Alua'},
        {id: 3, name: 'Temirlan'},
        {id: 4, name: 'Tair'}
    ]

    const messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How r u?'},
        {id: 3, message: 'Call me back'}
    ]

    const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}  />);

    const messagesElements = messages.map(m => <Message message={m.message} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;