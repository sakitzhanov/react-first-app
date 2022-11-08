import React from "react";

import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} profilePicture={d.profilePicture} />);
    const messagesElements = props.state.messages.map(m => <Message message={m.message} isMine={m.isMine} />)

    const messageElement = React.createRef();
    
    const onSendMessage = () => {
        const action = sendMessageActionCreator();
        props.dispatch(action);
    }

    const onMessageTextChange = () => {
        const messageText = messageElement.current.value;
        const action = updateNewMessageTextActionCreator(messageText);
        props.dispatch(action);
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
                        <textarea placeholder="Enter message" ref={ messageElement } value={props.state.newMessageText} onChange={onMessageTextChange}></textarea>
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