import React, { useState, useContext, useEffect } from 'react'
import { Typography, Paper, Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        marginLeft: '7px',
        marginRight: '9px',
        width: theme.spacing(12),
        height: theme.spacing(12)
    }
}))

const ItemCard = ({food, orders}) => {
    const classes = useStyles()
    console.log('this is food', food)
    return (
        
            <Paper>
                <Grid container >
                    <Grid item>
                        <Avatar alt={food.name} src={food.imgURL} className={classes.avatar}/>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' display='block' gutterBottom>
                            {food.name}
                        </Typography>
                        <Typography variant='body2'>
                            {food.description} 
                        </Typography>
                        <Typography>
                            ${food.price}.00
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        
    )
}
export default ItemCard