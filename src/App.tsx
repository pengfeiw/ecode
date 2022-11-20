import React from "react";
import { createRoot } from "react-dom/client";
import ECode from "./App/index";

const html = "<div>ECode is cool!</div>";
const css = `div {
    color: #007acc;
    font-size: 25px;
}`;

const App = () => {
    return (
        <ECode
            style={{ height: "100%" }}
            html={html}
            css={css}
        />
    );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

export default App;
