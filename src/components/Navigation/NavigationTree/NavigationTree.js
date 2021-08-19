import React from 'react';
import { TreeView } from "@material-ui/lab";
import useConfigToTree from "./useConfigToTree";

const NavigationTree = ({ config }) => {
    const treeItems = useConfigToTree(config);
    return (
        <TreeView>
            {treeItems}
        </TreeView>
    );
};

export default NavigationTree;
