import { Panel, ContextType } from "./index";

export const setPanelVisible = (context: ContextType<Panel[]>, panelKey: string | number, visible: boolean) => {
    const {value, setter} = context;
    const index = value.findIndex((p) => p.key === panelKey);
    if (index !== -1) {
        const newPanels = [...value];
        newPanels[index].visible = visible;
        setter(newPanels);
    }
};
