import { useState } from "react";
import { createContext } from "react";

const FilterContext = createContext();

function FilterProvider({children}){
    const [isMobileFilterBtnClicked, setIsMobileFilterBtnClicked] = useState(false)
    return <FilterContext.Provider value={{isMobileFilterBtnClicked,setIsMobileFilterBtnClicked}}>
        {children}
    </FilterContext.Provider>
}

export {FilterContext ,FilterProvider }