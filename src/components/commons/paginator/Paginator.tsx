import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from "./Paginator.module.css";
import {Button, Pagination, PaginationItem} from "@mui/material";
import {usersAPI} from "../../../api/api";
import styled from "styled-components";

type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    portionSize: number
}


const Paginator = (props: PaginatorPropsType) => {

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    //const portionCount = Math.ceil(pagesCount / props.portionSize)
    //const pages = []
    //for (let i = 0; i <= pagesCount; i++) {
    //    pages.push(i)
    //}
    //const [portionNumber, setPortionNumber] = useState(1)
    //const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    //const rightPortionPageNumber = portionNumber * props.portionSize

    const handlerClick = (page: number) => {
        props.onPageChanged(page)
    }


    return (
        <StyledPaginator >
            <Pagination color={"primary"} count={pagesCount}
                        page={props.currentPage}
                        onChange={(_, num) => handlerClick(num)}

            />
            {/* { portionNumber > 1 &&
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
            }*/}
        </StyledPaginator>
    );
};



const StyledPaginator = styled.div`
  background-color: var(--wrap-bg-color);
   padding-left: 30%;
  color: var(--b-w-text-color);
`

export default Paginator;