import React from "react";

import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} profilePicture={d.profilePicture} />);
    const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} isMine={m.isMine} />)

    const messageElement = React.createRef();
    
    const onSendMessage = () => {
        props.sendMessage();
    }

    const onMessageTextChange = () => {
        const messageText = messageElement.current.value;
        props.changeMessageText(messageText);
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
                <div>
                    <div>
                        <textarea placeholder="Enter message" ref={ messageElement } value={state.newMessageText} onChange={onMessageTextChange}></textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessage }>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;