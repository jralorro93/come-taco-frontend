import React from 'react';
import { Drawer, Divider, List, ListItem, ListItemText, CssBaseline } from '@material-ui/core';
import HomePic from '../Images/homePage3.jpg'
import withSideDrawerStyles from '../styles/SideDrawer.style'

const SideDrawer = ({classes}) => {
    const centeredText = { textAlign: 'center'}
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

export default withSideDrawerStyles(SideDrawer)