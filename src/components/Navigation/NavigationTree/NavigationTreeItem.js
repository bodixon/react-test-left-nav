import { TreeItem } from "@material-ui/lab";
import { number, string } from "prop-types";
import expanded from './expanded.svg';
import collapsed from './collapsed.svg';
import { useTreeItemStyles } from "./useTreeItemStyles";

const StyledTreeItem = ({ label, link, nodeId, level, ...other }) => {
    const classes = useTreeItemStyles();
    const collapsedIcon = level === 0 ? <img alt="Collapsed" src={collapsed} /> : null;
    const expandedIcon = level === 0 ? <img alt="Expanded" src={expanded} /> : null;

    return <TreeItem
        nodeId={nodeId}
        classes={{
            root: classes.root,
            content: classes.content,
            group: classes.group,
            expanded: classes.expanded,
            label: classes.label,
            iconContainer: classes.iconContainer,
            selected: classes.selected,
        }}
        collapseIcon={expandedIcon}
        expandIcon={collapsedIcon}
        label={
            <div className={classes.labelRoot}>
                {link
                    ? <a className={classes.labelText} href={link}>{label}</a>
                    : <div className={classes.labelText}>{label}</div>}
            </div>
        }

        {...other}
    />
};

StyledTreeItem.propTypes = {
    label: string.isRequired,
    nodeId: string.isRequired,
    link: string,
    level: number,
};

export default StyledTreeItem;
