import { makeStyles } from "@material-ui/core/styles";

export const useTreeItemStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(0.5),
        padding: theme.spacing(1, 0),
        '$group &': {
            marginBottom: 0,
            padding: 0
        },
        '&$selected:hover > $content $label, &$selected:focus > $content $label, &$selected > $content $label': {
            backgroundColor: 'inherit !important'
        }
    },
    content: {},
    group: {
        marginLeft: 0
    },
    expanded: {
        backgroundColor: 'var(--color-blue)',
        borderRadius: '10px',
    },
    label: {
        backgroundColor: 'inherit',
        color: 'inherit',
        fontWeight: 'inherit',
        marginLeft: theme.spacing(5),
        '&:hover': {
            backgroundColor: 'inherit !important'
        }
    },
    iconContainer: {
        '& > img': {
            marginLeft: theme.spacing(6),
            width: theme.spacing(4)
        }
    },
    selected: {},
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5, 0),
    },
    labelText: {
        color: 'var(--color-blue-darkest)',
        fontSize: '18px',
        fontWeight: 'bold',
        maxWidth: theme.spacing(16),
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        '$group &': {
            color: 'var(--color-blue-light)',
            fontWeight: 'normal',
        },
        '$group $content:hover &': {
            color: 'white !important',
        },
        '$expanded > $content &': {
            color: 'white !important'
        }
    },
}));
