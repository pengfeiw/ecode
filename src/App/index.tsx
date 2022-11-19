import React, { FC } from "react";
import useEffectState from "../hooks/useEffectState";
import { HtmlContext, CssContext, JavascriptContext } from "./context";
import JavascriptEditor from "./editor/JavascriptEditor";
import CssEditor from "./editor/CssEditor";
import HtmlEditor from "./editor/HtmlEditor";
import Output from "./editor/Output";

export interface Props {
    html?: string;
    css?: string;
    javascript?: string;
}

const App: FC<Props> = ({
    html = "",
    css = "",
    javascript = ""
}) => {
    const [htmlText, setHtmlText] = useEffectState<string>(html);
    const [cssText, setCssText] = useEffectState<string>(css);
    const [javascriptText, setJavaScriptText] = useEffectState<string>(javascript);

    return (
        <HtmlContext.Provider value={{value: htmlText, setter: setHtmlText}}>
            <CssContext.Provider value={{value: cssText, setter: setCssText}}>
                <JavascriptContext.Provider value={{value: javascriptText, setter: setJavaScriptText}}>
                    <HtmlEditor />
                    <CssEditor />
                    <JavascriptEditor />
                    <Output />
                </JavascriptContext.Provider>
            </CssContext.Provider>
        </HtmlContext.Provider>
    );
};

export default App;
