import React from "react";
import { Navigate } from "react-router-dom";

import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const SendMessageForm = (props) => {
    return (        
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"text"}
                    component={Textarea}
                    placeholder="Enter message"
                    validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const SendMessageReduxForm = reduxForm({
    form: 'message'
})(SendMessageForm);

const Dialogs = (props) => {
    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} profilePicture={d.profilePicture} />);
    const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} isMine={m.isMine} />)
    
    const onSubmit = (formData) => {
        console.log(formData);
        props.sendMessage(formData);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <SendMessageReduxForm
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    )
}

export default Dialogs;