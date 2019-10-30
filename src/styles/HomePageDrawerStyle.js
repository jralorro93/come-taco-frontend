import React from 'react';
import  { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Drawer, Divider, List, ListItem, ListItemText } from '@material-ui/core';

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
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
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
}))


const HomePageDrawerStyle = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer 
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor='left'
            >
                <h2>Logo Here</h2>
                <h1>Come Taco!</h1>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemText primary="Order Online"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Location"/>
                    </ListItem>
                    <ListItem>
                         <ListItemText primary="Contact Us"/>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default HomePageDrawerStyle