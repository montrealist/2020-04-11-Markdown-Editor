import React, { useState } from "react";
import "./App.css";
import Editor from "./Editor";

import "react-bulma-components/dist/react-bulma-components.min.css";
import { Columns } from "react-bulma-components";
import { Content } from "react-bulma-components";

const ReactMarkdown = require("react-markdown");

const initialInput = "# This is a header\n\nAnd this is a paragraph";

function App() {
    const [input, setInput] = useState(initialInput);

    return (
        <div className="app">
            <header className="app-header">Markdown Editor</header>
            <Columns>
                <Columns.Column className="editor" size="half">
                    <Editor value={input} onChange={setInput} />
                </Columns.Column>
                <Columns.Column size="half">
                    <Content>
                        <ReactMarkdown source={input} />
                    </Content>
                </Columns.Column>
            </Columns>
        </div>
    );
}

export default App;
