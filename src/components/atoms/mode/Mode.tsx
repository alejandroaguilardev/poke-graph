import { IconButton } from "@mui/material"
import { ToggleOn, ToggleOff, LightMode, DarkMode } from '@mui/icons-material';
import { useContext } from 'react';
import { ModeContext } from '../../../context/mode/ModeContext';


export const Mode = () => {
    const { theme, handleTheme } = useContext(ModeContext);

    return (
        <IconButton
            aria-label="icon-mode"
            onClick={() => {
                handleTheme(theme.mode === 'dark' ? 'light' : 'dark');
                localStorage.setItem('mode', theme.mode === 'dark' ? 'light' : 'dark')
            }}
            sx={{ fontSize: "1rem" }}
        >
            {theme.mode === 'dark' ?
                <>
                    <DarkMode />
                    <ToggleOn sx={{ fontSize: "3rem", color: 'primary.main' }} />
                </>
                :
                <>
                    <LightMode />
                    <ToggleOff sx={{ fontSize: "3rem" }} />
                </>
            }
        </IconButton >
    )
}
