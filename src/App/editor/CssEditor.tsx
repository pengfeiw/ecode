import React, { useContext, FC } from "react";
import { CssContext } from "../context";
import BaseEditor, { BaseEditorProps } from "./BaseEditor";
import { css } from "@codemirror/lang-css";

const CssEditor: FC<Omit<BaseEditorProps, "value" | "onChange">> = (props) => {
    const { value: cssText, setter: setCssText } = useContext(CssContext);

    return (
        <BaseEditor
            title="CSS"
            value={cssText}
            onChange={setCssText}
            extensions={[css()]}
            {...props}
        />
    );
};

export default CssEditor;
