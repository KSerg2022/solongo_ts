import React, {useEffect} from 'react';
import MyCheckBox from "./UI/MyCheckBox/MyCheckBox";
import {IPokemons} from "../model";
import {setFilters, setTypes} from "../redux/filters/actionsFilters"
import {useTypesSelector} from '../hooks/useTypedSelector';
import {useAppDispatch} from '../hooks/useAppDispatch';

function getListTypes(data: IPokemons[]): string[] {
    let types: Set<string> = new Set<string>()
    for (let pokemon of data) {
        for (let type of pokemon.types) {
            types.add(type)
        }
    }
    // return [...types].sort()
    return [...Array.from(types)].sort()
}

function getListFilters(data: IPokemons[], filters: { [key: string]: boolean }) {
    const types: string[] = getListTypes(data)
    let categories: { [key: string]: boolean } = {}
    for (let type of types) {
        if (filters[type]) {
            categories[type] = true
        } else {
            categories[type] = false
        }
    }
    return categories
}

interface FiltersProps {
    onFilter: (filterList: string[]) => void
}

export const Filters = ({onFilter}: FiltersProps) => {
    const dispatch = useAppDispatch();
    const {pokemons} = useTypesSelector(state => state.pokemons)
    const {types, filters} = useTypesSelector(state => state.filters)

    useEffect(() => {
        dispatch(setTypes(getListTypes(pokemons)))
        dispatch(setFilters(getListFilters(pokemons, filters)))
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
                    {types?.map((value, i) => (
                        <MyCheckBox
                            status={filters[value]}
                            key={i}
                            type="checkbox"
                            id={value}
                            name={value}
                            onChange={(e: { target: { name: string }; }) =>
                                dispatch(setFilters({
                                    ...filters, [e.target.name]: !filters[e.target.name]
                                }))}
                        />
                    ))}
                </div>
            </form>
        </div>
    )
};

export default Filters;
