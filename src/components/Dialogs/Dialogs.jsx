import React from "react";

import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} profilePicture={d.profilePicture} />);
    const messagesElements = props.state.messages.map(m => <Message message={m.message} isMine={m.isMine} />)

    const messageElement = React.createRef();
    
    const sendMessage = () => {
        const messageText = messageElement.current.value;
        alert(`Сообщение "${messageText}" отправлена`);
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
                        <textarea ref={ messageElement }></textarea>
                    </div>
                    <button onClick={ sendMessage }>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;