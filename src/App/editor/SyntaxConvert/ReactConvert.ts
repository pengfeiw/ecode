import { transform } from "@babel/standalone";
import SyntaxConvert from "./SyntaxConvert";

class ReactConvert extends SyntaxConvert {
    public setHtml() {
        const html = `<!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <title>JS Bin</title>
          <script src="//unpkg.com/react/umd/react.development.js"></script>
          <script src="//unpkg.com/react-dom/umd/react-dom.development.js"></script>
        </head>
        <body>
          <div id="root"></div>
        </body>
        </html>`;
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
