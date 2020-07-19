import React, { createContext, useContext } from 'react';

import { ThemeProvider } from 'styled-components';

import userPersistedState from '../utils/userPersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface Theme {
    theme?: any;
    setTheme?: any;
    toggleTheme?: () => void;
}

export const ThemeContext = createContext<Theme>({});

export default function ThemeConfigProvider({ children }: any) {

    const [theme, setTheme] = userPersistedState('theme', dark);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export function useThemeConfig() {
    const context = useContext(ThemeContext);
    const { theme, toggleTheme } = context;
    return { theme, toggleTheme };
}