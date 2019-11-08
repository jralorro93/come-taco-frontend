import { withStyles } from '@material-ui/core/styles'

export default withStyles(theme => ({
    card: {
        maxWidth: 200,
        minWidth: 200,
        float: "right",
        margin: '10px',
        backgroundColor: '#7B4627'
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
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}))