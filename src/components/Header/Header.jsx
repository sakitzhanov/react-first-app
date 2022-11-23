import React from "react";
import { NavLink } from "react-router-dom";

import classes from './Header.module.css';

const Header = (props) => {
    return (        
        <header className={classes.header}>
            <img alt="logo" src='https://assets.stickpng.com/images/584290baa6515b1e0ad75ac2.png' width='10%' />
            <div className={classes.loginBlock}>
                {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}                
            </div>
        </header>
    )
}

export default Header;