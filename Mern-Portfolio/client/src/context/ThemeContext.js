import  {React, useState, createContext, useContext} from 'react';

const ThemeContext = createContext();

const ThemeProvider =({Children})=>{
    const [theme,setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            {Children}
        </ThemeContext.Provider >
    );
};

//custom hook
const useTheme = () =>useContext(ThemeContext);

export{useTheme ,ThemeProvider};