import React from "react";
import { createRoot } from "react-dom/client";
import EditorTest from "./App/index";

const App = () => {
    return <EditorTest />;
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

export default App;
