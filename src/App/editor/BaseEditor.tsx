import CodeMirror, { ReactCodeMirrorProps, ReactCodeMirrorRef } from "@uiw/react-codemirror";
import React, { FC } from "react";

export type BaseEditorProps = ReactCodeMirrorProps & React.RefAttributes<ReactCodeMirrorRef>;

const BaseEditor: FC<BaseEditorProps> = (props) => {

    return (
        <CodeMirror {...props} />
    );
};

export default BaseEditor;
