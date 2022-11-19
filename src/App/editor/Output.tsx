import React, { useContext, useEffect, useState } from "react";
import { CssContext, HtmlContext, JavascriptContext } from "../context";

const Output = () => {
    const {value: htmlText} = useContext(HtmlContext);
    const {value: cssText} = useContext(CssContext);
    const {value: javascriptText} = useContext(JavascriptContext);
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
        <iframe
            title="output"
            sandbox="allow-scripts allow-modals allow-forms"
            frameBorder="1"
            srcDoc={srcDoc}    
        />
    );
};

export default Output;
