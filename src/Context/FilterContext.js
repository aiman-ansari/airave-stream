import { createContext, useContext } from "react";
import { useReducer } from "react";
import { FilterHandler } from "../Reducer/filterHandler";

const FilterContext = createContext()
const useFilter = () => useContext(FilterContext)

const FilterProvider = ({children}) =>{
    
    const [state, dispatch] = useReducer(FilterHandler, {
        category:""
    })
    return(
        <FilterContext.Provider value={{state, dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

export { useFilter, FilterProvider}