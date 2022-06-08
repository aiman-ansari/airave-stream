import { createContext, useContext, useState } from "react";
import { useReducer } from "react";
import { FilterHandler } from "../Reducer/filterHandler";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [isActive, setIsActive] = useState("All");
  const [state, dispatch] = useReducer(FilterHandler, {
    category: "",
    active: "all",
  });
  return (
    <FilterContext.Provider value={{ state, dispatch, isActive, setIsActive }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
