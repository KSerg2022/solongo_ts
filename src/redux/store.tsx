import {initialState, pokemonsReducer} from './reducer'
//
//
// const enhancer = devToolsEnhancer()
//
// // @ts-ignore
// export const store = createStore(rootReducer, enhancer)
import {createContext, FC, PropsWithChildren, useContext, useReducer,} from "react";
import {allTypesActions, initState} from "./types";
// import * as allActions from "./actions"



type StateContextProps = {
  state: initState;
  dispatch: React.Dispatch<allTypesActions>;
  // dispatch: React.Dispatch<allActions>;
};

export const StateContext = createContext(null as unknown as StateContextProps);


export const StateProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonsReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};
