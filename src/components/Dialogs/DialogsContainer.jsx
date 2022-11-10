import React from "react";

import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    // const state = props.store.getState().dialogsPage;

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage;
    
                const onSendMessage = () => {
                    const action = sendMessageActionCreator();
                    store.dispatch(action);
                }
            
                const onMessageTextChange = (messageText) => {
                    const action = updateNewMessageTextActionCreator(messageText);
                    store.dispatch(action);
                }

                return (
                    <Dialogs
                        dialogsPage={state}
                        sendMessage={onSendMessage}
                        changeMessageText={onMessageTextChange}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;