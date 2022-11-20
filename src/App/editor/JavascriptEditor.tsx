import React, { useContext, FC } from "react";
import { JavascriptContext } from "../context";
import BaseEditor, { BaseEditorProps } from "./BaseEditor";
import { javascript } from '@codemirror/lang-javascript';

const JavascriptEditor: FC<Omit<BaseEditorProps, "value" | "onChange">> = (props) => {
    const { value: javascriptText, setter: setJavascriptText } = useContext(JavascriptContext);

    return (
        <BaseEditor
            title="JavaScript"
            value={javascriptText}
            onChange={setJavascriptText}
            extensions={[javascript({ jsx: true })]}
            {...props}
        />
    );
};

export default JavascriptEditor;
