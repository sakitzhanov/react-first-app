import React from "react";
import { NavLink } from "react-router-dom";

import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/messages/1">Asset</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/messages/2">Alua</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/messages/3">Temirlan</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    HI!
                </div>
                <div className={classes.message}>
                    Answer please...
                </div>
                <div className={classes.message}>
                    =\
                </div>
            </div>
        </div>
    )
}

export default Dialogs;