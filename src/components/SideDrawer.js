import React from 'react';
import { Link } from "react-router-dom";

//Importing from components
import withSideDrawerStyles from '../styles/SideDrawer.style'

//Importing from MUI
import { useTheme } from '@material-ui/core/styles'
import { Drawer, Divider, List, ListItem, ListItemText, CssBaseline } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const SideDrawer = (props) => {
    const {classes} = props
    const theme = useTheme()
    const centeredText = { textAlign: 'center'}
    const colorWhite = {color: 'white'}

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
                <h2 style={centeredText}>Logo Here</h2>
                <h1 className={classes.companyTitle} style={centeredText}>¡Come Tacos!</h1>
                <Divider className={classes.divider}/>
                <div className={classes.toolbar} />
                <List>
                    <ListItem button divider component={Link} to='/'>
                        <ListItemText className={classes.navOptions} primary="Home" style={centeredText}/>
                    </ListItem>
                    <ListItem button divider component={Link} to='/menu'>
                        <ListItemText className={classes.navOptions} primary="Order Online" style={centeredText}/>
                    </ListItem>
                    <ListItem button divider component={Link} to='/contact'>
                        <ListItemText className={classes.navOptions} primary="Contact Us" style={centeredText}/>
                    </ListItem>
                    <ListItem button divider component={Link} to='/about'>
                        <ListItemText className={classes.navOptions} primary="Our Story" style={centeredText}/>
                    </ListItem>
                    
                    { props.currentUser ? (
                        <ListItem button divider component={Link} to='/login'>
                            <ListItemText className={classes.navOptions} primary="Log Out" style={centeredText} onClick={props.handleLogout}/>
                        </ListItem>
                    ) : (
                        <ListItem button divider component={Link} to='/login'>
                            <ListItemText className={classes.navOptions} primary="Login" style={centeredText}/>
                        </ListItem>
                    )}
                    
                    { props.currentUser ? (
                        <ListItem button component={Link} to='/shoppingcart'>
                            <ListItemText className={classes.navOptions} primary="Shopping Cart" style={centeredText}/>
                        </ListItem>
                    ) : (
                        <ListItem button component={Link} to='/signup'>
                            <ListItemText className={classes.navOptions} primary="Sign Up" style={centeredText}/>
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </div>

    )
}

export default withSideDrawerStyles(SideDrawer)