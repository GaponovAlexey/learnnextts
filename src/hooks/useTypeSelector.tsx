import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStateType } from "..";

export const useTypeSelector: TypedUseSelectorHook<RootStateType> = useSelector