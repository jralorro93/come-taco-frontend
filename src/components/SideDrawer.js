import React from 'react';
import { Drawer, Divider, List, ListItem, ListItemText, CssBaseline } from '@material-ui/core';
import { Link } from "react-router-dom";
import HomePic from '../Images/homePage3.jpg'
import withSideDrawerStyles from '../styles/SideDrawer.style'
import { useTheme } from '@material-ui/core/styles'

const SideDrawer = ({classes}) => {
    const theme = useTheme()
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
                    <ListItem button component={Link} to='/'>
                        <ListItemText className={classes.navOptions} primary="Home" style={centeredText}/>
                    </ListItem>
                    <ListItem button component={Link} to='/menu'>
                        <ListItemText className={classes.navOptions} primary="Order Online" style={centeredText}/>
                    </ListItem>
                    <ListItem button component={Link} to='/contact'>
                        <ListItemText className={classes.navOptions} primary="Contact Us" style={centeredText}/>
                    </ListItem>
                    <ListItem button component={Link} to='/about'>
                        <ListItemText className={classes.navOptions} primary="Our Story" style={centeredText}/>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default withSideDrawerStyles(SideDrawer)