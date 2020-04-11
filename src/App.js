import React, { useState } from "react";
import "./App.css";
import Editor from "./Editor";

const ReactMarkdown = require("react-markdown");

const initialInput = "# This is a header\n\nAnd this is a paragraph";

function App() {
    const [input, setInput] = useState(initialInput);

    return (
        <div className="App">
            <header className="App-header">Markdown Editor</header>
            <main>
                <div className="editor">
                    <Editor value={input} onChange={setInput} />
                </div>
                <div className="result">
                    <ReactMarkdown source={input} />
                </div>
            </main>
        </div>
    );
}

export default App;
