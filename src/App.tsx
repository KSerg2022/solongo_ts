import React, {useState} from 'react';

import './css/main.css'
import Header from "./componants/Header";
import Pokemons from "./componants/Pokemons";
import {IPokemons} from "./model";

import {usePokemons} from "./hooks/pokemons"


export const App = () => {
    const {pokemons, qty, setQty} = usePokemons()
    const [limit, setLimit] = useState<number>(10)

    const updateLimit = (value: React.SetStateAction<number>) => {
        if (value === -1) {
            setLimit(pokemons.length)
        } else {
            setLimit(value)
        }
    }

    const sortedPokemons = (): IPokemons[] => {
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
            </main>
        </div>
    );
};

export default App;