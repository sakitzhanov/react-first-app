import React, { useState } from "react";
import cn from "classnames"

import classes from './Paginator.module.css';

const Paginator = ({ totalItemsCount, pageSize, onSetCurrentPage, currentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount/portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
            <div className={classes.paginator}>
                {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
                {pages
                .filter(val => val >= leftPortionPageNumber && val <= rightPortionPageNumber)
                .map(val => (
                    <span key={val} onClick={() => { onSetCurrentPage(val) }} className={cn(classes.pageNumber, { [classes.selectedPage]: currentPage === val})}>{val}</span>
                ))}
                {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
            </div>
    )
}

export default Paginator;