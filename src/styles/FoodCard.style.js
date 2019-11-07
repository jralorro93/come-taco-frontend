import { withStyles } from '@material-ui/core/styles'

export default withStyles(theme => ({
    card: {
        maxWidth: 200,
        float: "right",
        margin: '10px'
    },
    media: {
        height: 0,
        paddingTop: "56.25%" 
    },
    actions: {
        display: "flex"
    }
}))