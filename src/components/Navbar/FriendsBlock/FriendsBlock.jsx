import React from "react";
import { NavLink } from "react-router-dom";
import StoreContext from "../../../StoreContext";

import classes from './FriendsBlock.module.css'

const Block = (props) => {
    return (
        <div>
            <div>
                <img width="50px" src={props.profilePicture} />
            </div>
            <NavLink to={`/friends/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const FriendsBlock = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().navbar;
                const blocksElements = state.friends.map(f => <Block id={f.id} name={f.name} profilePicture={f.profilePicture} />)
                return (
                    <div>            
                        { blocksElements }
                    </div>
                )
            }}
        </StoreContext.Consumer>
    )
}

export default FriendsBlock;