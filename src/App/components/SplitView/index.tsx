import React, { FC, useEffect, useState } from "react";
import "./index.scss";

interface Props {
    panes: {
        key: number | string,
        ele: React.ReactElement
    }[];
}

class Divider extends React.Component<{}> {
    private dividerRef = React.createRef<HTMLDivElement>();

    render() {
        return <div ref={this.dividerRef} className="split-view-divider"></div>;
    }
}

/**
 * Resizable split views
 */
const SplitView: FC<Props> = ({ panes }) => {
    return (
        <div className="split-view">
            {
                panes.map((pane, index) => (
                    <React.Fragment key={pane.key}>
                        <div className="split-view-pane">
                            {pane.ele}
                        </div>
                        {index !== panes.length - 1 ? <Divider /> : null}
                    </React.Fragment>
                ))
            }
        </div>
    );
};

export default SplitView;
