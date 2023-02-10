import { AppBar, Container } from "@mui/material";
import { useContext } from 'react';
import { ModeContext } from '../../../context/mode/ModeContext';
import { Menu } from "../../molecules";


const pages = ["basic-name", "3D-name", "image-node"];

export const NavBar = () => {
    const { theme } = useContext(ModeContext);

    return (
        <AppBar position="sticky"
            sx={{
                background: theme.mode === 'dark' ? '#222' : '#fff',
                color: theme.mode === 'dark' ? '#fff' : '#343a40'
            }}>
            <Container maxWidth="lg">
                <Menu pages={pages} />
            </Container>
        </AppBar>
    )
}
