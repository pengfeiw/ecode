import React, { useContext, useState, FC, useEffect } from "react";
import { JavaScriptContext, PanelContext } from "../context";
import BaseEditor, { BaseEditorProps } from "./BaseEditor";
import { javascript } from '@codemirror/lang-javascript';
import ReactConvert from "./SyntaxConvert/ReactConvert";
import SyntaxConvert from "./SyntaxConvert/SyntaxConvert";
import useEffectState from "../../hooks/useEffectState";

type JSLang = "JavaScript" | "React";

const getConvert = (lang: JSLang) => {
    switch (lang) {
        case "JavaScript":
            return new SyntaxConvert(); 
        case "React":
            return new ReactConvert();
        default:
            return new SyntaxConvert(); 
    }
};

const JavascriptEditor: FC<Omit<BaseEditorProps, "value" | "onChange">> = (props) => {
    const javascriptContext = useContext(JavaScriptContext);
    const { value: javascriptText, setter: setJavascriptText, realValueSetter: setJavascriptRealText } = javascriptContext;
    const [lang, setLang] = useState<JSLang>("React");
    const [langConvert] = useEffectState<JSLang, SyntaxConvert>(lang, getConvert);

    const onChange = (value: string) => {
        setJavascriptText(value);
    };

    useEffect(() => {
        langConvert.init();
    }, [langConvert]);

    useEffect(() => {
        const realValue = langConvert.convert(javascriptText);
        setJavascriptRealText(realValue);
    }, [javascriptText]);

    return (
        <BaseEditor
            title={lang}
            value={javascriptText}
            onChange={onChange}
            extensions={[javascript({ jsx: true })]}
            {...props}
        />
    );
};

export default JavascriptEditor;
