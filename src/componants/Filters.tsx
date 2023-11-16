import React, {useEffect, useState} from 'react';
import MyCheckBox from "./UI/MyCheckBox/MyCheckBox";
import {IPokemons} from "../model";


function getListTypes(data: IPokemons[]): string[] {
    let types = new Set<string>()
    for (let pokemon of data) {
        for (let type of pokemon.types) {
            types.add(type)
        }
    }
    // @ts-ignore
    return [...types].sort()
}

function getListFilters(data: IPokemons[]) {
    const types = getListTypes(data)
    let categories: { [key: string]: boolean } = {}
    for (let type of types) {
        categories[type] = false
    }
    return categories
}

interface FiltersProps {
    pokemons: IPokemons[],
    onFilter: (filterList: string[]) => void
}


export const Filters = ({pokemons, onFilter}: FiltersProps) => {
    const [types, setTypes] = useState<string[]>([])
    const [filters, setFilters] = useState<{ [key: string]: boolean }>({})

    useEffect(() => {
        setTypes(getListTypes(pokemons))
        setFilters(getListFilters(pokemons))
    }, [pokemons])

    useEffect(() => {
        currentFilter()
    }, [filters])


    function currentFilter(): void {
        let filterList: string[] = []
        for (let type of types) {
            if (filters[type]) {
                filterList.push(type)
            }
        }
        onFilter(filterList)
    }

    return (<div className="filters">
            <h5>Filters: </h5>
            <form>
                <div className="row justify-content-md-center">
                    {types.map((value, i) => (
                        <MyCheckBox
                            key={i}
                            type="checkbox"
                            id={value}
                            name={value}
                            onChange={(e: { target: { name: string | number; }; }) => setFilters({
                                ...filters,
                                [e.target.name]: !filters[e.target.name]
                            })}
                        />
                    ))}
                </div>
            </form>
        </div>
    )
};

export default Filters;
