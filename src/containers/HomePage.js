import React from 'react';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider';

// const drawerWidth = 240;
// const useStyles = makeStyles(theme => ({
    // root: {
    //     display: 'flex',
    //   },
    //   appBar: {
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     marginLeft: drawerWidth,
    //   },
    //   drawer: {
    //     width: drawerWidth,
    //     flexShrink: 0,
    //   },
    //   drawerPaper: {
    //     width: drawerWidth,
    //   },
    //   toolbar: theme.mixins.toolbar,
    //   content: {
    //     flexGrow: 1,
    //     backgroundColor: theme.palette.background.default,
    //     padding: theme.spacing(3),
    // }
// }));

const drawerWidth = 240

const styles = {
    root: {
        display: 'flex',
      },
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
    }
}

function HomePage(props) {
    const {classes} = props;
    console.log('this is props', props)
    console.log('this is classes', classes)
    console.log('this is styles', styles)
    return (
        <div>
            <Drawer 
                className={classes.drawer}
                variants='permanent'
                anchor='left'
            />
            <Divider />
        </div>
    )
}
export default withStyles(styles)(HomePage)