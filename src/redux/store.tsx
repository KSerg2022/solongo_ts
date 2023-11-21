import {createStore} from "redux"
import {rootReducer} from './reducer'
import { devToolsEnhancer } from "@redux-devtools/extension"


const enhancer = devToolsEnhancer()

// @ts-ignore
export const store = createStore(rootReducer, enhancer)
