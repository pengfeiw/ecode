import React, { useContext, FC, useEffect } from "react";
import { HtmlContext } from "../context";
import BaseEditor, { BaseEditorProps } from "./BaseEditor";
import { html } from '@codemirror/lang-html';

const HtmlEditor: FC<Omit<BaseEditorProps, "value" | "onChange" | "langs" | "curLangKey">> = (props) => {
    const { value: htmlText, setter: setHtmlText, realValueSetter: setHtmlRealText } = useContext(HtmlContext);

    useEffect(() => {
        setHtmlRealText(htmlText);
    }, [htmlText]);

    return (
        <BaseEditor
            langs={[{ key: "HTML", value: "HTML" }]}
            curLangKey="HTML"
            {...props}
            value={htmlText}
            onChange={setHtmlText}
            extensions={[html()]}
        />
    );
};

export default HtmlEditor;
