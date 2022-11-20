import React, { FC, HTMLAttributes, useState } from "react";
import useEffectState from "../hooks/useEffectState";
import { HtmlContext, CssContext, JavascriptContext } from "./context";
import JavascriptEditor from "./editor/JavascriptEditor";
import CssEditor from "./editor/CssEditor";
import HtmlEditor from "./editor/HtmlEditor";
import Output from "./editor/Output";
import TabGroup from "./components/TabGroup";
import SplitView from "./components/SplitView";
import "./index.scss";

export interface Props extends HTMLAttributes<HTMLDivElement>{
    html?: string;
    css?: string;
    javascript?: string;
}

export interface Panel {
    key: number | string;
    title: string;
    ele: React.ReactElement;
    visible: boolean;
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

    const tabClick = (key: string | number) => {
        const newPanels = [...panels];
        const index = panels.findIndex((pane) => pane.key === key);
        if (index !== -1) {
            newPanels[index].visible = !newPanels[index].visible;
            setPanels(newPanels);
        }
    };

    return (
        <HtmlContext.Provider value={{value: htmlText, setter: setHtmlText}}>
            <CssContext.Provider value={{value: cssText, setter: setCssText}}>
                <JavascriptContext.Provider value={{value: javascriptText, setter: setJavaScriptText}}>
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
                </JavascriptContext.Provider>
            </CssContext.Provider>
        </HtmlContext.Provider>
    );
};

export default App;
