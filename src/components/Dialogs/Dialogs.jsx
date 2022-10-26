import React from "react";

import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Asset
                </div>
                <div className={classes.dialog}>
                    Alua
                </div>
                <div className={classes.dialog}>
                    Temirlan
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