import React, {useEffect} from 'react';
import MyCheckBox from "./UI/MyCheckBox/MyCheckBox";
import {IPokemons} from "../model";
import {allActions} from "../redux/actions"
import {useStateContext} from '../redux/store';

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
    onFilter: (filterList: string[]) => void
}

export const Filters = ({onFilter}: FiltersProps) => {
    const {
        dispatch,
        state: {pokemons, types, filters},
    } = useStateContext();

    useEffect(() => {
        dispatch({type: allActions.SET_TYPES, payload: getListTypes(pokemons)})
        dispatch({type: allActions.SET_FILTERS, payload: getListFilters(pokemons)})
    }, [pokemons])

    useEffect(() => {
        currentFilter()
    }, [filters])


    function currentFilter(): void {
        let filterList: string[] = []
        for (let type of types) {
            // @ts-ignore
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
                            key={i}
                            type="checkbox"
                            id={value}
                            name={value}
                            onChange={(e: { target: { name: string }; }) =>
                                dispatch({type: allActions.SET_FILTERS,
                                    payload: {...filters,
                                        // @ts-ignore
                                [e.target.name]: !filters[e.target.name]}
                            })}
                        />
                    ))}
                </div>
            </form>
        </div>
    )
};

export default Filters;
