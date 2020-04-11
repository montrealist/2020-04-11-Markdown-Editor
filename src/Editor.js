import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = (props) => {
    return (
        <>
            <AceEditor
                mode="markdown"
                theme="monokai"
                onChange={props.onChange}
                value={props.value}
                setOptions={{
                    showLineNumbers: true,
                }}
            />
        </>
    );
};

export default Editor;
