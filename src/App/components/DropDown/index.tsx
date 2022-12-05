import React, { FC, useLayoutEffect, useState } from "react";
import useToggle from "../../../hooks/useToggle";
import "./index.scss";

interface DropDownItem {
    key: string | number;
    value: string;
}

interface Props {
    items: DropDownItem[];
    selectedKey: string | number;
}

const DropDown: FC<Props> = ({ items, selectedKey }) => {
    const [selectedItem, setSelectedItem] = useState<DropDownItem>();
    const [dropdownActive, toggleDropDowndownActive] = useToggle();

    useLayoutEffect(() => {
        const selected = items.find((item) => item.key === selectedKey);
        if (selected === undefined) {
            throw new Error("DropDownItem: selectedKey is not defined in items.");
        }
        setSelectedItem(selected);
    }, [items, selectedKey]);

    return (
        <div className="dropdown">
            <span className="dropdown-title" onClick={toggleDropDowndownActive}>{selectedItem?.value}</span>
            {
                dropdownActive ? (
                    <div className="dropdown-list">
                    {
                        items.map((item) => (
                            <span className="dropdown-list-item" key={item.key}>{item.value}</span>
                        ))
                    }
                    </div>
                ) : null
            }
        </div>
    );
};

export default DropDown;
