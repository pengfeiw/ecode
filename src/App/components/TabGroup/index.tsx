import React, { FC } from "react";
import { Panel } from "../..";
import "./index.scss";

type Key = number | string;

type Tab = Pick<Panel, "key" | "title" | "visible">;

type TabClick = (key: Key, title?: string) => void;

interface Props {
    tabs: Tab[];
    tabClick?: TabClick;
}

const TabGroup: FC<Props> = ({tabs, tabClick: onChange}) => {
    return (
        <div className="tab-group">
            {
                tabs.map((tab) => (
                    <div
                        className={tab.visible ? "tab tab-visible" : "tab tab-hidden"}
                        key={tab.key}
                        onClick={onChange ? () => onChange(tab.key, tab.title) : undefined}>
                        {tab.title}
                    </div>
                ))
            }
        </div>
    );
};

export default TabGroup;
