import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-chrome";

const Editor = (props) => {
    return (
        <>
            <AceEditor
                mode="markdown"
                theme={props.theme}
                onChange={props.onChange}
                value={props.value}
                width="100%"
                height="100%"
                showPrintMargin={false}
                name="ace-editor"
                editorProps={{ $blockScrolling: false }}
                setOptions={{
                    showLineNumbers: true,
                }}
            />
        </>
    );
};

export default Editor;
