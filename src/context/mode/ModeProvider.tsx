import { useEffect, useReducer } from "react";
import { ModeContext } from "./ModeContext";
import { ModeReducer } from "./ModeReducer";

const INIT = {
	mode: 'light'
}

interface IModeProvider {
	children: React.ReactElement | React.ReactElement[] | React.ReactNode;
}

export const ModeProvider = ({ children }: IModeProvider) => {
	const [theme, dispatch] = useReducer(ModeReducer, INIT);

	const handleTheme = (mode: string) => {
		dispatch({
			type: "changeMode",
			payload: { mode },
		});
	};

	useEffect(() => {
		handleTheme(localStorage.getItem("mode") ?? "dark");
	}, []);

	return (
		<ModeContext.Provider value={{ theme, handleTheme }}>
			{children}
		</ModeContext.Provider>
	);
};
