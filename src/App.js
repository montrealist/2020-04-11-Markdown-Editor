import React, { useState } from "react";
import "./App.css";
import Editor from "./Editor";
import { sample } from "./SampleMarkdown";

import "react-bulma-components/dist/react-bulma-components.min.css";
import { Columns, Content, Dropdown } from "react-bulma-components";

const ReactMarkdown = require("react-markdown");

const themes = [
    "monokai",
    "github",
    "tomorrow",
    "kuroir",
    "twilight",
    "xcode",
    "textmate",
    "solarized_dark",
    "solarized_light",
    "terminal",
];

themes.forEach((theme) => require(`ace-builds/src-noconflict/theme-${theme}`));

function App() {
    const [input, setInput] = useState(sample);
    const [theme, setTheme] = useState("chrome");

    return (
        <div className="app">
            <header className="app-header">
                Markdown Editor
                <Dropdown
                    value={theme}
                    onChange={setTheme}
                    label="Select editor theme:"
                >
                    {themes.map((theme) => (
                        <Dropdown.Item value={theme}>{theme}</Dropdown.Item>
                    ))}
                </Dropdown>
            </header>
            <Columns>
                <Columns.Column className="editor" size="half">
                    <Editor theme={theme} value={input} onChange={setInput} />
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
