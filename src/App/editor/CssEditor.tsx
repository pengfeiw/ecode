import React, { useContext, FC } from "react";
import { CssContext } from "../context";
import BaseEditor, { BaseEditorProps } from "./BaseEditor";

const CssEditor: FC<Omit<BaseEditorProps, "value" | "onChange">> = (props) => {
    const {value: cssText, setter: setCssText} = useContext(CssContext);

    return <BaseEditor value={cssText} onChange={setCssText} {...props} />;
};

export default CssEditor;
