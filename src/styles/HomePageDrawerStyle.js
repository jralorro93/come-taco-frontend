import React from 'react';
import  { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Drawer, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import HomePic from '../Images/homePage3.jpg'

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.background.default
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
      padding: theme.spacing(3)
    },
    navOptions: {
        padding: 15,
        fontFamily: "Arial"
    }
}))


const HomePageDrawerStyle = () => {
    const centeredText = { textAlign: 'center'}
    const classes = useStyles()
    console.log('this is classes', classes.toolbar.backgroundColor)
    return (
        <div className={classes.root} style={{backgroundColor: "#A76C3F"}}>
            <CssBaseline />
            <Drawer 
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor='left'
            >
                <h2 style={centeredText}>Logo Here</h2>
                <h1 style={centeredText}>Come Taco!</h1>
                <Divider />
                <div className={classes.toolbar} />
                <List>
                    <ListItem button>
                        <ListItemText className={classes.navOptions} primary="Order Online" style={centeredText}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.navOptions} primary="Location" style={centeredText}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.navOptions} primary="Contact Us" style={centeredText}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.navOptions} primary="Our Story" style={centeredText}/>
                    </ListItem>
                </List>
            </Drawer>
            <main>
                <img src={HomePic}/>
            </main>
        </div>
    )
}

export default HomePageDrawerStyle