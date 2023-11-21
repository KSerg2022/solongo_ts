import React, {useEffect, useState} from "react";

import {IPokemons} from "../model";
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import {getTotalPages, getPage, getCurrentData, getLimit} from "../redux/selectors"
import {setPage, setTotalPages} from "../redux/actions"

export const usePagination = () => {
    const dispatch = useDispatch();

    const currentData = useSelector(getCurrentData)
    const limit = useSelector(getLimit)


    useEffect(() => {
        dispatch(setTotalPages(Math.ceil(currentData.length / limit)))
    }, [currentData])

    useEffect(() => {
        const qtyPages = Math.ceil(currentData.length / limit)
        dispatch(setTotalPages(qtyPages))
    }, [limit])

};
