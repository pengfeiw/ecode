import React, { useContext, FC } from "react";
import { JavascriptContext } from "../context";
import BaseEditor, { BaseEditorProps } from "./BaseEditor";

const JavascriptEditor: FC<Omit<BaseEditorProps, "value" | "onChange">> = (props) => {
    const {value: javascriptText, setter: setJavascriptText} = useContext(JavascriptContext);

    return <BaseEditor value={javascriptText} onChange={setJavascriptText} {...props} />;
};

export default JavascriptEditor;
