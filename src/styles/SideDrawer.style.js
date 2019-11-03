import  { withStyles } from '@material-ui/core/styles'

const color = 'rgba(255, 255, 255, 0.7)'
const drawerWidth = 300

export default withStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primary.dark
      },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: theme.palette.primary.dark
      },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        background: '#19212b',
        // '& *': {
        //     color,
        // }
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