import CodeMirror, { ReactCodeMirrorProps, ReactCodeMirrorRef } from "@uiw/react-codemirror";
import React, { FC, useEffect, useState } from "react";
import DropDown, { DropDownItem as Lang } from "../components/DropDown";
import "./BaseEditor.scss";

type CodeMirrorProps = Omit<ReactCodeMirrorProps & React.RefAttributes<ReactCodeMirrorRef>, "title">;
export interface BaseEditorProps extends CodeMirrorProps {
    langs: Lang[];
    curLangKey: string | number;
    onLangChange?: (key: string | number | any, value?: string) => void;
}

const BaseEditor: FC<BaseEditorProps> = (props) => {
    const { langs, curLangKey, onLangChange } = props;

    return (
        <div className="base-editor" style={{height: "100%"}}>
            <div className="base-editor-title">
                <DropDown items={langs} selectedKey={curLangKey} onChange={onLangChange} />
            </div>
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
