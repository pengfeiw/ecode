import CodeMirror, { ReactCodeMirrorProps, ReactCodeMirrorRef } from "@uiw/react-codemirror";
import React, { FC } from "react";
import "./BaseEditor.scss";

export type BaseEditorProps = {title?: string} & ReactCodeMirrorProps & React.RefAttributes<ReactCodeMirrorRef>;

const BaseEditor: FC<BaseEditorProps> = (props) => {
    const { title } = props;

    console.log(props.value);
    return (
        <div className="base-editor" style={{height: "100%"}}>
            {title ? <div className="base-editor-title" style={{height:"40px"}}>{title}</div> : null}
            <CodeMirror
                basicSetup={{
                    lineNumbers: false,
                    highlightActiveLineGutter: false,
                    foldGutter: false
                }}
                height="calc(100% - 40px)"
                {...props}
            />
        </div>
    );
};

export default BaseEditor;
