import { createContext, useState } from "react";

export const FilterContext = createContext({
    filters: {},
    setFilters: () => { },
});

export const FilterProvider = ({ children }) => {

    const [filters, setFilters] = useState({
        searchFields: "",
        tagFilters: [],
    });

    return (
        <FilterContext.Provider value={{filters,setFilters}}>
            {children}
        </FilterContext.Provider>
    );
}