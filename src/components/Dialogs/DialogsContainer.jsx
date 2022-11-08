import React from "react";

import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;
    
    const onSendMessage = () => {
        const action = sendMessageActionCreator();
        props.store.dispatch(action);
    }

    const onMessageTextChange = (messageText) => {
        const action = updateNewMessageTextActionCreator(messageText);
        props.store.dispatch(action);
    }

    return (
        <Dialogs
            dialogsPage={state}
            sendMessage={onSendMessage}
            changeMessageText={onMessageTextChange}
        />
    )
}

export default DialogsContainer;