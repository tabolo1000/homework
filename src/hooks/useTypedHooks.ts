import {Selector, TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {RootLoadingType} from "../s2-homeworks/hw10/bll/loadingReducer";
import {AppStateType} from "../s2-homeworks/hw10/bll/store";

export const useAppDispatch = useDispatch<Dispatch<RootLoadingType>>
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector