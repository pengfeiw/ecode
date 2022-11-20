import React, { useContext, FC } from "react";
import { HtmlContext } from "../context";
import BaseEditor, { BaseEditorProps } from "./BaseEditor";
import { html } from '@codemirror/lang-html';

const HtmlEditor: FC<Omit<BaseEditorProps, "value" | "onChange">> = (props) => {
    const { value: htmlText, setter: setHtmlText } = useContext(HtmlContext);

    return (
        <BaseEditor
            title="HTML"
            {...props}
            value={htmlText}
            onChange={setHtmlText}
            extensions={[html()]}
        />
    );
};

export default HtmlEditor;
