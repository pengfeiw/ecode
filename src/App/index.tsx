import React, { FC, HTMLAttributes, useEffect, useLayoutEffect, useState } from "react";
import useEffectState from "../hooks/useEffectState";
import { HtmlContext, CssContext, JavaScriptContext, PanelContext, Panel } from "./context";
import JavascriptEditor from "./editor/JavascriptEditor";
import CssEditor from "./editor/CssEditor";
import HtmlEditor from "./editor/HtmlEditor";
import Output from "./editor/Output";
import TabGroup from "./components/TabGroup";
import SplitView from "./components/SplitView";
import SyntaxConvert from "./editor/SyntaxConvert/SyntaxConvert";
import "./index.scss";

export interface Props extends HTMLAttributes<HTMLDivElement> {
    html?: string;
    css?: string;
    javascript?: string;
}


const defaultPanels: Panel[] = [
    {
        key: "HTML",
        title: "HTML",
        ele: <HtmlEditor />,
        visible: true
    },
    {
        key: "CSS",
        title: "CSS",
        ele: <CssEditor />,
        visible: true
    },
    {
        key: "JavaScript",
        title: "JavaScript",
        ele: <JavascriptEditor />,
        visible: true
    },
    {
        key: "Output",
        title: "Output",
        ele: <Output />,
        visible: true
    }
];

const App: FC<Props> = ({
    html = "",
    css = "",
    javascript = "",
    ...props
}) => {
    const [htmlText, setHtmlText] = useEffectState<string>(html);
    const [cssText, setCssText] = useEffectState<string>(css);
    const [javascriptText, setJavaScriptText] = useEffectState<string>(javascript);
    const [panels, setPanels] = useState<Panel[]>(defaultPanels);

    useLayoutEffect(() => {
        SyntaxConvert.contexts = {
            HtmlContext: {value: htmlText, setter: setHtmlText},
            CssContext: {value: cssText, setter: setCssText},
            JavaScriptContext: {value: javascriptText, setter: setJavaScriptText},
            PanelContext: {value: panels, setter: setPanels}
        }
    }, [htmlText, setHtmlText, cssText, setCssText, javascriptText, setJavaScriptText, panels, setPanels]);

    const tabClick = (key: string | number) => {
        const newPanels = [...panels];
        const index = panels.findIndex((pane) => pane.key === key);
        if (index !== -1) {
            newPanels[index].visible = !newPanels[index].visible;
            setPanels(newPanels);
        }
    };

    return (
        <HtmlContext.Provider value={{ value: htmlText, setter: setHtmlText }}>
            <CssContext.Provider value={{ value: cssText, setter: setCssText }}>
                <JavaScriptContext.Provider value={{ value: javascriptText, setter: setJavaScriptText }}>
                    <PanelContext.Provider value={{ value: panels, setter: setPanels }}>
                        <div className="ecode" {...props}>
                            <div className="ecode-header">
                                <TabGroup tabs={panels} tabClick={tabClick} />
                            </div>
                            <div className="ecode-content">
                                <SplitView
                                    panes={panels}
                                />
                            </div>
                        </div>
                    </PanelContext.Provider>
                </JavaScriptContext.Provider>
            </CssContext.Provider>
        </HtmlContext.Provider>
    );
};

export default App;
