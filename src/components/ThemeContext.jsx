/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useContext, useState } from 'react'

const ThemeC = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((prevValue) =>
            prevValue === "light" ? "dark" : "light"
        )
    }

    const value = {
        isDark: theme === 'dark',
        theme,
        toggleTheme
    }

    return (
        <ThemeC.Provider value={value}>
            {children}
        </ThemeC.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeC)
}