import React, { FC, HTMLAttributes } from "react";
import useEffectState from "../hooks/useEffectState";
import { HtmlContext, CssContext, JavascriptContext } from "./context";
import JavascriptEditor from "./editor/JavascriptEditor";
import CssEditor from "./editor/CssEditor";
import HtmlEditor from "./editor/HtmlEditor";
import Output from "./editor/Output";
import TabGroup, { Tab } from "./components/TabGroup";
import SplitView from "./components/SplitView";
import "./index.scss";

export interface Props extends HTMLAttributes<HTMLDivElement>{
    html?: string;
    css?: string;
    javascript?: string;
}

const App: FC<Props> = ({
    html = "",
    css = "",
    javascript = "",
    ...props
}) => {
    const [htmlText, setHtmlText] = useEffectState<string>(html);
    const [cssText, setCssText] = useEffectState<string>(css);
    const [javascriptText, setJavaScriptText] = useEffectState<string>(javascript);

    const tabs: Tab[] = [
        {
            key: 0,
            title: "HTML"
        },
        {
            key: 1,
            title: "CSS",
        },
        {
            key: 2,
            title: "JavaScript"
        },
        {
            key: 3,
            title: "Output"
        }
    ];

    return (
        <HtmlContext.Provider value={{value: htmlText, setter: setHtmlText}}>
            <CssContext.Provider value={{value: cssText, setter: setCssText}}>
                <JavascriptContext.Provider value={{value: javascriptText, setter: setJavaScriptText}}>
                    <div className="ecode" {...props}>
                        <div className="ecode-header">
                            <TabGroup tabs={tabs} />
                        </div>
                        <div className="ecode-content">
                            <SplitView
                                panes={[
                                    {key: "HTML", ele: <HtmlEditor />},
                                    {key: "CSS", ele: <CssEditor />},
                                    {key: "JavaScript", ele: <JavascriptEditor />},
                                    {key: "Output", ele: <Output />}
                                ]}
                            />
                        </div>
                    </div>
                </JavascriptContext.Provider>
            </CssContext.Provider>
        </HtmlContext.Provider>
    );
};

export default App;
