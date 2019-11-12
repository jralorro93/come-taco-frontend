import { withStyles } from '@material-ui/core/styles'

export default withStyles(theme => ({
    card: {
        maxWidth: 200,
        minWidth: 200,
        float: "right",
        margin: '10px',
        backgroundColor: '#332A2F'
    },
    media: {
        height: 0,
        paddingTop: "56.25%" 
    },
    actions: {
        display: "flex"
    },
    icon: {
        color: '#EBE3E0'
    },
    expand: {
        transform: 'rotate(0deg)',
        color: '#EBE3E0',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        color: '#EBE3E0'
    }
}))