import React, { useContext } from "react";
import { CssContext } from "../context";
import BaseEditor from "./BaseEditor";

const CssEditor = () => {
    const {value: cssText, setter: setCssText} = useContext(CssContext)

    return <BaseEditor value={cssText} onChange={setCssText} />
};

export default CssEditor;
