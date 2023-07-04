import { Box, ThemeProvider } from "@mui/material"
import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { DarkTheme, LightTheme } from "../themes"

interface IThemeContextData{
    themeName: 'light' | 'dark'
    toggleTheme : () => void
}

const ThemeContext = createContext({} as IThemeContextData)

export const useAppThemeContext =()=>{
    return useContext(ThemeContext)
}

export const AppThemeContext: React.FC<{children : React.ReactNode}> =({children})=>{
    const [themeName, setThemeName] = useState<'light'| 'dark'>('light')

    const toggleTheme = useCallback (()=>{
        setThemeName(oldthemeName => oldthemeName === 'light' ? 'dark' : 'light')
    },[])

    const theme = useMemo(()=>{
        if(themeName === 'light') return LightTheme
        return DarkTheme
    },[themeName])

    return(
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme} >
                <Box /* width={'100vw'} */width={'auto'} height={'auto'} marginBottom={'0px'} bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}