import { transform } from "@babel/standalone";
import { Contexts } from "../../../context";
import { setPanelVisible } from "../../../context/action";
import SyntaxConvert from "./../SyntaxConvert";
import htmlText from './html.txt';
import javascriptText from './javascript.txt';

class ReactConvert extends SyntaxConvert {
    public init(): void {
        SyntaxConvert.contexts.HtmlContext.setter(htmlText);
        SyntaxConvert.contexts.JavaScriptContext.setter(javascriptText);
    }

    public convert(str: string): string {
        const result = transform(str, { presets: ['react']});
        if (result && result.code) {
            return result.code
        }

        return "";
    }
}

export default ReactConvert;
