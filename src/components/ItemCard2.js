import React, { useState, useContext, useEffect } from 'react'
import { Typography, Paper, Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        marginLeft: '7px',
        marginRight: '9px'
    }
}))

const ItemCard = ({food, orders}) => {
    const classes = useStyles()
    console.log('this is food', food)
    return (
        
            <Paper>
                <Grid container >
                    <Avatar alt={food.name} src={food.imgURL} variant='square' className={classes.avatar}/>
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
            </Paper>
        
    )
}
export default ItemCard