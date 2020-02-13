import { withStyles } from '@material-ui/core/styles'
import contactUs from '../Images/contact.jpg'

export default withStyles(theme => ({
    container: {
        backgroundImage: `url(${contactUs})`,
        height: '900px'
    },
    formGroup: {
        paddingTop: '50px'
    },
    form: {
        backgroundColor: '#fff',
        marginBottom: '10px'
    }
}))