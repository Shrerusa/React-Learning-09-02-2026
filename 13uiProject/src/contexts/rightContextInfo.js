import { Children, createContext, useContext } from "react";

export const rightContextInfo = createContext([])

export const RightContextProvider = rightContextInfo.Provider

export default function useRightContextInfo() {
    return useContext(rightContextInfo)
}