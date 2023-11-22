import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/reducer";


export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector