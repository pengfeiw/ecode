import CodeMirror from "@uiw/react-codemirror";
import React, { FC } from "react";

interface Props {
    value?: string;
    onChange?: (value: string) => void;
    extensions?: any[];
}

const BaseEditor: FC<Props> = ({ value, onChange, extensions }) => {

    return (
        <CodeMirror
            value={value}
            onChange={onChange}
            extensions={extensions}
        />
    );
};

export default BaseEditor;
