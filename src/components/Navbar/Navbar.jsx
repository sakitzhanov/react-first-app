import React from "react";
import { NavLink } from "react-router-dom";
import FriendsBlock from "./FriendsBlock/FriendsBlock";

import classes from './Navbar.module.css'

const Navbar = (props) => {
    return (        
        <nav className={classes.nav}>
            <div>
                <NavLink to="/profile" className={ navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages" className={ navData => navData.isActive ? classes.active : classes.item }>Messages</NavLink>          
            </div>
            <div>
                <NavLink to="/news" className={ navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={ navData => navData.isActive ? classes.active : classes.item }>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={ navData => navData.isActive ? classes.active : classes.item }>Settings</NavLink>
            </div>
            <div className={classes.friendsBlock}>
                <NavLink to="/friends" className={ navData => navData.isActive ? classes.active : classes.item }>Friends</NavLink>
                <FriendsBlock friends={props.state.friends} />
            </div>
        </nav>
    )
}

export default Navbar;