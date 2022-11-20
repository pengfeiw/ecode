import React from "react";
import { createRoot } from "react-dom/client";
import ECode from "./App/index";

const App = () => {
    return <ECode style={{height: "100%"}}/>;
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

export default App;
