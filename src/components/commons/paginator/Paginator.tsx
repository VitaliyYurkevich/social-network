import React, {useState} from 'react';
import classes from "./Paginator.module.css";
import {Button} from "@mui/material";

type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    portionSize: number
}

const Paginator = (props: PaginatorPropsType) => {

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    const pages = []

    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [portionNumber, setPortionNumber] = useState(1)

    const portionCount = Math.ceil(pagesCount / props.portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * props.portionSize


    return (
        <div>
            { portionNumber > 1 &&
            <Button color={'inherit'} variant="contained" onClick={()=> {setPortionNumber(portionNumber - 1)}}>PREV</Button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span style={{cursor: "pointer"}}
                    className={props.currentPage === p ? classes.selectedPage : ''}
                    onClick={() => props.onPageChanged(p)}> {p} </span>
            })}
            { portionCount > portionNumber &&
                <Button color={'inherit'} variant="contained" onClick={()=> {setPortionNumber(portionNumber + 1)}}>PREV</Button>
            }
        </div>
    );
};

export default Paginator;