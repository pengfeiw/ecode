import React, { useContext, FC } from "react";
import { HtmlContext } from "../context";
import BaseEditor, { BaseEditorProps } from "./BaseEditor";

const HtmlEditor: FC<Omit<BaseEditorProps, "value" | "onChange">> = (props) => {
    const {value: htmlText, setter: setHtmlText} = useContext(HtmlContext);

    return <BaseEditor {...props} value={htmlText} onChange={setHtmlText} />;
};

export default HtmlEditor;
