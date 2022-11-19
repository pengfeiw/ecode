import { createContext } from "react";
interface LangContext {
    value: string;
    setter: (value: string) => void;
}

const defaultContext = {
    value: "",
    setter: (v: string) => {}
};

export const HtmlContext = createContext<LangContext>(defaultContext);
export const CssContext = createContext<LangContext>(defaultContext);
export const JavascriptContext = createContext<LangContext>(defaultContext);
