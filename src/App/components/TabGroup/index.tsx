import React, { FC } from "react";
import "./index.scss";

type Key = number | string;
export interface Tab {
    key: number | Key;
    title: string;
}

type TabChange = (key: Key, title: string) => void;

interface Props {
    tabs: Tab[];
    onChange?: TabChange;
}

const TabGroup: FC<Props> = ({tabs, onChange}) => {
    return (
        <div className="tab-group">
            {
                tabs.map((tab) => (
                    <div
                        className="tab"
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
