import { CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./";
import { useMemo, ReactNode, useContext } from 'react';
import { ThemeProvider } from "@emotion/react";
import { ModeContext } from '../context/mode/ModeContext';

interface Props {
    children: ReactNode
}

export const ThemeSetting = ({ children }: Props) => {
    const { theme } = useContext(ModeContext);

    const themeSelected = useMemo(
        () => (theme.mode === "dark" ? darkTheme : lightTheme),
        [theme]
    );

    return (
        <ThemeProvider theme={themeSelected}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
