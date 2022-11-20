import React, { FC } from "react";
import Split from "react-split";
import "./index.scss";

interface Props {
    panes: {
        key: number | string,
        ele: React.ReactElement
    }[];
}

/**
 * Resizable split views
 */
const SplitView: FC<Props> = ({ panes }) => {
    return (
        <div className="split-view">
            <Split className="split">
                {
                    panes.map((pane) => (
                        <React.Fragment key={pane.key}>
                            <div className="split-view-pane">
                                {pane.ele}
                            </div>
                        </React.Fragment>
                    ))
                }
            </Split>
        </div>
    );
};

export default SplitView;
