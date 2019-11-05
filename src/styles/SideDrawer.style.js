import  { withStyles } from '@material-ui/core/styles'

const color = 'rgba(255, 255, 255, 0.7)'
const drawerWidth = 300

export default withStyles(theme => ({
    root: {
      display: 'flex'
    },
    companyTitle: {
      color: 'white',
      textShadow: '2px 3px #464948'
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#101318'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    },
    navOptions: {
      padding: 15,
      fontFamily: "Arial",
      color: 'white',
      textShadow: '2px 1px #464948',
      fontSize: 15,
      '&:hover': {
        background: '#343536'
      }
    },
    divider: {
      marginTop: theme.spacing.unit * 10,
      background: '#404854'
    }
}))