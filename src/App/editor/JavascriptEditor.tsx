import React, { useContext } from "react";
import { JavascriptContext } from "../context";
import BaseEditor from "./BaseEditor";

const JavascriptEditor = () => {
    const {value: javascriptText, setter: setJavascriptText} = useContext(JavascriptContext)

    return <BaseEditor value={javascriptText} onChange={setJavascriptText} />
};

export default JavascriptEditor;
