import React, { useContext } from "react";
import { HtmlContext } from "../context";
import BaseEditor from "./BaseEditor";

const HtmlEditor = () => {
    const {value: htmlText, setter: setHtmlText} = useContext(HtmlContext)

    return <BaseEditor value={htmlText} onChange={setHtmlText} />
};

export default HtmlEditor;
