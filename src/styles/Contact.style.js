import { withStyles } from '@material-ui/core/styles'
import contactUs from '../Images/contact.jpg'

export default withStyles(theme => ({
    container: {
        backgroundImage: `url(${contactUs})`,
        height: '900px'
    }
}))