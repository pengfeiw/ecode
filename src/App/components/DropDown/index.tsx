import React, { FC, useLayoutEffect, useState } from "react";
import useToggle from "../../../hooks/useToggle";
import "./index.scss";

export interface DropDownItem {
    key: string | number;
    value: string;
}

interface Props {
    items: DropDownItem[];
    selectedKey: string | number;
    onChange?: (key: string | number, value?: string) => void;
}

const DropDown: FC<Props> = ({ items, selectedKey, onChange }) => {
    const [selectedItem, setSelectedItem] = useState<DropDownItem>();
    const [dropdownActive, toggleDropDowndownActive] = useToggle();

    useLayoutEffect(() => {
        const selected = items.find((item) => item.key === selectedKey);
        if (selected === undefined) {
            throw new Error("DropDownItem: selectedKey is not defined in items.");
        }
        setSelectedItem(selected);
    }, [items, selectedKey]);

    const itemClick = (key: string | number, value: string) => {
        toggleDropDowndownActive();
        if (onChange) {
            onChange(key, value);
        }
    }

    return (
        <div className="dropdown">
            <span className="dropdown-title" onClick={toggleDropDowndownActive}>{selectedItem?.value}</span>
            {
                dropdownActive ? (
                    <div className="dropdown-list">
                    {
                            items.map((item) => (
                                <span
                                    className="dropdown-list-item"
                                    key={item.key}
                                    onClick={() => itemClick(item.key, item.value)}
                                >
                                    {item.value}
                                </span>
                            ))
                    }
                    </div>
                ) : null
            }
        </div>
    );
};

export default DropDown;
