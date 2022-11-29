import React from "react";

import classes from './Paginator.module.css';

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
            <div>
                {pages.map(val => (
                    <span key={val} onClick={() => { props.onSetCurrentPage(val) }} className={props.currentPage === val ? classes.selectedPage : undefined}>&nbsp;{val}</span>
                ))}
            </div>
    )
}

export default Paginator;