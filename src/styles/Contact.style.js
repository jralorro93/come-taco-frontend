import { withStyles } from '@material-ui/core/styles'
import bg from '../Images/cutting-board.jpg'

export default withStyles(theme => ({
    container: {
        backgroundImage: `url(${bg})`
    }
}))