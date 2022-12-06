import { Contexts } from "../../context";

class SyntaxConvert {
    static contexts: Contexts;
    public convert(str: string) {
        return str;
    }

    init() {
        SyntaxConvert.contexts.HtmlContext.setter("");
        SyntaxConvert.contexts.JavaScriptContext.setter("");
    }
}

export default SyntaxConvert;
