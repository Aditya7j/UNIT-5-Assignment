import React, { useState } from "react";

export const ThemeContext = React.createContext();


function ThemeContextProvider({children}){
    const [state,setState] =useState("light")

    const toggleTheme = ()=>{
        {state==="light"?setState("dark"):setState("light")}
    }

    return (
        <ThemeContext.Provider value={[state,toggleTheme]}>
            {/* <h2>ThemeContext</h2> */}
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider


