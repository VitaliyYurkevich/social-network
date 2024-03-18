import React from 'react';
import classes from "./Paginator.module.css";

type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
}

const Paginator = (props: PaginatorPropsType) => {

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    const pages = []

    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p ? classes.selectedPage : ''}
                    onClick={() => props.onPageChanged(p)}>{p}</span>
            })}
        </div>
    );
};

export default Paginator;