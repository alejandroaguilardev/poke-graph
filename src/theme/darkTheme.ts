import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#0052B4",
			light: "#222",
			dark: "#111",
			contrastText: "#fff",
		},
		secondary: {
			main: "#2946F7",
		},
		background: {
			default: "#17202A!important",
			paper: "#1B2631",
		},
		text: {
			primary: "#fff",
			secondary: "#ddd",
		},
	},
});
