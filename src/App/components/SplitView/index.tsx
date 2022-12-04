import React, { FC } from "react";
import Split from "react-split";
import "./index.scss";
import { Panel } from "../../context";

interface Props {
    panes: Pick<Panel, "ele" | "key" | "visible">[];
}

/**
 * Resizable split views
 */
const SplitView: FC<Props> = ({ panes }) => {
    const filterPanes = panes.filter((pane) => pane.visible);

    return (
        <div className="split-view">
            <Split className="split" key={filterPanes.length}>
                {
                    filterPanes.map((pane) => (
                        <div className="split-view-pane" key={pane.key}>
                            {pane.ele}
                        </div>
                    ))
                }
            </Split>
        </div>
    );
};

export default SplitView;
