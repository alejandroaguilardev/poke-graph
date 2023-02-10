import { createContext } from "react";

interface IInit {
    theme: { mode: string };
    handleTheme: (mode: string) => void;
}

export const ModeContext = createContext({} as IInit);
