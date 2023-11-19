import React, {useEffect, useState} from "react";

import {IPokemons} from "../model";

interface UsePaginationProps {
    currentData: IPokemons[]
    limit: number
}

export const usePagination = ({currentData, limit}: UsePaginationProps) => {
    const [totalPages, setTotalPages] = useState<number>(0);
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        setPage(1)
    }, [totalPages])

    useEffect(() => {
        setTotalPages(Math.ceil(currentData.length / limit))
    }, [currentData])


    useEffect(() => {
        const qtyPages = Math.ceil(currentData.length / limit)
        setTotalPages(qtyPages)
    }, [limit])

    return {page, setPage, totalPages, setTotalPages}
};
