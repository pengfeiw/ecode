import React, { useContext, useEffect, useState } from "react";
import { CssContext, HtmlContext, JavaScriptContext } from "../context";
import "./BaseEditor.scss";

const Output = () => {
    const { realValue: htmlText } = useContext(HtmlContext);
    const { realValue: cssText } = useContext(CssContext);
    const { realValue: javascriptText } = useContext(JavaScriptContext);
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
