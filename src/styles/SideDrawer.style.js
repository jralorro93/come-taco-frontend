import  { withStyles } from '@material-ui/core/styles'

const drawerWidth = 280

export default withStyles(theme => ({
    root: {
      display: 'flex'
    },
    companyTitle: {
      color: theme.palette.common.white,
      textShadow: '2px 3px #464948'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#101318'
    },
    drawerIcon: {
      margin: 0,
      color: theme.palette.common.white
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    },
    listItem: {
      '&:hover': {
        background: 'rgba(255,255,255,.08)',
      }
    },
    navOptions: {
      padding: 15,
      fontFamily: "Arial",
      color: theme.palette.common.white,
      textShadow: '2px 1px #464948',
      fontSize: 15
    },
    divider: {
      marginTop: theme.spacing.unit * 10,
      background: '#404854'
    }
}))