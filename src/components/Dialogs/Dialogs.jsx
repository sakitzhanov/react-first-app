import React from "react";

import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} profilePicture={d.profilePicture} />);
    const messagesElements = props.state.messages.map(m => <Message message={m.message} isMine={m.isMine} />)

    const messageElement = React.createRef();
    
    const onSendMessage = () => {
        props.sendMessage();
    }

    const onMessageTextChange = () => {
        const messageText = messageElement.current.value;
        props.updateNewMessageText(messageText);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea ref={ messageElement } value={props.state.newMessageText} onChange={onMessageTextChange}></textarea>
                    </div>
                    <button onClick={ onSendMessage }>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;