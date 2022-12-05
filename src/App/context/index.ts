import { createContext } from "react";

export interface ContextType<T> {
    value: T;
    setter: (value: T) => void;
}

export interface LangContextType<T = string> extends ContextType<T> {
    realValue: T;
    realValueSetter: (value: T) => void;
}

/**
 * value: 显示在屏幕上的 text
 * realValue: value 经过 SyntaxConvert 转换后的 text
 */
const defaultLangContext = {
    value: "",
    realValue: "",
    setter: (v: string) => { },
    realValueSetter: (v: string) => { }
};

export interface Panel {
    key: number | string;
    title: string;
    ele: React.ReactElement;
    visible: boolean;
}

export interface Panel {
    key: number | string;
    title: string;
    ele: React.ReactElement;
    visible: boolean;
}

export const HtmlContext = createContext<LangContextType<string>>(defaultLangContext);
export const CssContext = createContext<LangContextType<string>>(defaultLangContext);
export const JavaScriptContext = createContext<LangContextType<string>>(defaultLangContext);
export const PanelContext = createContext<ContextType<Panel[]>>({
    value: [],
    setter: (v) => { }
});

export interface Contexts {
    HtmlContext: ContextType<string>;
    CssContext: ContextType<string>;
    JavaScriptContext: ContextType<string>;
    PanelContext: ContextType<Panel[]>;
}
