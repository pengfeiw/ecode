import React, { useContext, FC, useEffect } from "react";
import { CssContext } from "../context";
import BaseEditor, { BaseEditorProps } from "./BaseEditor";
import { css } from "@codemirror/lang-css";

const CssEditor: FC<Omit<BaseEditorProps, "value" | "onChange" | "langs" | "curLangKey">> = (props) => {
    const { value: cssText, setter: setCssText, realValueSetter: setCssRealText } = useContext(CssContext);

    useEffect(() => {
        setCssRealText(cssText);
    }, [cssText]);

    return (
        <BaseEditor
            langs={[{key: "CSS", value: "CSS"}]}
            curLangKey="CSS"
            value={cssText}
            onChange={setCssText}
            extensions={[css()]}
            {...props}
        />
    );
};

export default CssEditor;
