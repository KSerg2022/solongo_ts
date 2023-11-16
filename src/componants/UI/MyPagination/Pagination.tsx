import React from 'react';
// import {getPagesArray} from "../../../utils/pages";

const getPagesArray = (totalPages: number) => {
        let result = []
        for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
        return result;
}

interface PaginationProps {
    totalPages: number
    page: number
    setPage: (p: any) => void
}

export const Pagination = ({totalPages, page, setPage}: PaginationProps) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className="page__wrapper">
                <span
                    style={{marginRight: '10px', fontSize: 30, cursor: 'pointer'}}
                    onClick={() => setPage(1)}
                >&#8676;</span>
            {pagesArray.map(p =>
                <span
                    onClick={() => setPage(p)}
                    key={p}
                    className={page === p ? "page page__current" : "page"}>
                        {p}
                    </span>
            )}
                    <span
                        style={{marginLeft: '10px', fontSize: 30, cursor: 'pointer'}}
                        onClick={() => setPage(pagesArray[pagesArray.length - 1])}
                    >&#8677;</span>
        </div>
    );
};
