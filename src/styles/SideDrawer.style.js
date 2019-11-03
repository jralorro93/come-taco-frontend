import  { withStyles } from '@material-ui/core/styles'

const drawerWidth = 300;
const color = 'rgba(255, 255, 255, 0.7)'

export default withStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primary
      },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        background: '#19212b',
        '& *': {
            color,
        }
      },
    drawerPaper: {
        width: drawerWidth,
      },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
      },
    navOptions: {
        padding: 15,
        fontFamily: "Arial"
      }
}))