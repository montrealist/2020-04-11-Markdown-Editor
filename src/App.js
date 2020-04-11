import React from "react";
import "./App.css";
import Editor from "./Editor";

function App() {
    return (
        <div className="App">
            <header className="App-header">Markdown Editor</header>
            <main>
                <Editor />
            </main>
        </div>
    );
}

export default App;
