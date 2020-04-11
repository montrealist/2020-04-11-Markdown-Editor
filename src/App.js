import React, { useState } from "react";
import "./App.css";
import Editor from "./Editor";
import { sample } from "./SampleMarkdown";

import "react-bulma-components/dist/react-bulma-components.min.css";
import {
    Columns,
    Container,
    Content,
    Dropdown,
    Hero,
    Navbar,
} from "react-bulma-components";

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
            <Navbar fixed="top">
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="/">
                        Markdown Editor
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container>
                        <Navbar.Item href="#">
                            <Dropdown
                                value={theme}
                                onChange={setTheme}
                                label="Select editor theme:"
                            >
                                {themes.map((theme) => (
                                    <Dropdown.Item value={theme}>
                                        {theme}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown>
                        </Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container position="end">
                        <Navbar.Item href="https://github.com/montrealist/2020-04-11-Markdown-Editor">
                            Repo on Github
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
            <Hero color="primary" className="is-fullheight-with-navbar">
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Columns.Column className="editor" size="half">
                                <Editor
                                    theme={theme}
                                    value={input}
                                    onChange={setInput}
                                />
                            </Columns.Column>
                            <Columns.Column size="half">
                                <Content>
                                    <ReactMarkdown source={input} />
                                </Content>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
                {/* <Hero.Foot>Foot</Hero.Foot> */}
            </Hero>
        </div>
    );
}

export default App;
