import React, {useEffect, useState} from 'react';
import axios from "axios";

import './css/main.css'
import Header from "./componants/Header";
import Pokemons from "./componants/Pokemons";
import {IPokemons} from "./model";
import {Pagination} from "./componants/UI/MyPagination/Pagination";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/"


export const App = () => {
    const [pokemons, setPokemons] = useState<IPokemons[]>([])
    const [qty, setQty] = useState<number>(16)
    const [limit, setLimit] = useState<number>(10)

    const [totalPages, setTotalPages] = useState<number>(0);
    const [page, setPage] = useState<number>(1)

    const updateLimit = (value: React.SetStateAction<number>) => {
        if (value === -1) {
            setLimit(pokemons.length)
        } else {
            setLimit(value)
        }
    }

    useEffect(() => {
        const qtyPages = Math.ceil(pokemons.length / limit)
        setTotalPages(qtyPages)
    }, [limit, pokemons])


    useEffect(() => {
        setPokemons(prevState => prevState = [])
        let start: number = 1
        for (; start <= qty; start++) {
            axios.get(baseUrl.concat(String(start))).then((res) => {
                let data: IPokemons = {
                    id: res.data.id,
                    name: res.data.name,
                    img_url: res.data.sprites.other.home.front_default,
                    types: res.data.types.map((e: { type: { name: string; }; }) => e.type.name)
                }
                setPokemons(prevState => [...prevState, data])
            })
        }
    }, [qty])

    const sortedPokemons = () => {
        return pokemons.sort(function (a: IPokemons, b: IPokemons) {
            // @ts-ignore
            return a.id - b.id
        })
    }

    return (
        <div>
            <Header title="Pokemon's list - "
                    qty={qty}
                    setQty={setQty}
                    limit={limit}
                    updateLimit={updateLimit}
            />
            <main>
                <Pokemons
                    limit={limit}
                    // @ts-ignore
                    pokemons={sortedPokemons}/>
                <Pagination totalPages={totalPages} page={page} setPage={setPage}/>
            </main>
        </div>
    );
};

export default App;