import React, { useMemo } from 'react';
import StyledTreeItem from "./NavigationTreeItem";

const itemsToTree = (items, level = 0) => items.map(item => (
    <StyledTreeItem
        nodeId={item.title}
        label={item.title}
        link={item.link}
        level={level}
        key={item.title}
    >
        {itemsToTree(item.children || [], level + 1)}
    </StyledTreeItem>
));

const useConfigToTree = (config) => {
    return useMemo(
        () => itemsToTree(config),
        [config]
    );
};

export default useConfigToTree;
