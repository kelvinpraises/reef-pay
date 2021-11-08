import { createContext, Dispatch, SetStateAction } from "react";

export type ContextValue = undefined | Dispatch<SetStateAction<string>>;

const ThemeContext = createContext<ContextValue>(undefined);

export default ThemeContext;
