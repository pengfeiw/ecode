import React, { useContext, useEffect, useState } from "react";
import { CssContext, HtmlContext, JavascriptContext } from "../context";
import "./BaseEditor.scss";

const Output = () => {
    const { value: htmlText } = useContext(HtmlContext);
    const { value: cssText } = useContext(CssContext);
    const { value: javascriptText } = useContext(JavascriptContext);
    const [srcDoc, setSrcDoc] = useState<string>("");

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSrcDoc(
                `
                <html>
                    <body>${htmlText}</body>
                    <style>${cssText}</style>
                    <script>${javascriptText}</script>
                </html>
            `);
        }, 250);
        return () => clearTimeout(timeOut);
    }, [htmlText, cssText, javascriptText]);

    return (
        <div className="base-editor">
            <div className="base-editor-title" style={{ height: "40px", color: "white" }}>Output</div>
            <iframe
                title="Output"
                sandbox="allow-scripts allow-modals allow-forms"
                frameBorder="1"
                srcDoc={srcDoc}
                style={{
                    width: "100%",
                    border: "none",
                    height: "calc(100% - 40px)",
                    background: "#f7f7f7"
                }}
            />
        </div>
    );
};

export default Output;
