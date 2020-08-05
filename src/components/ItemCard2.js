import React, { useState, useContext, useEffect } from 'react'
import { Typography, Paper, Grid, Avatar } from '@material-ui/core'
import {RemoveShoppingCartIcon} from '@material-ui/icons/'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        marginLeft: '7px',
        marginRight: '9px',
        width: theme.spacing(12),
        height: theme.spacing(12)
    },
    item: {
        textAlign: 'left',
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
                        <Typography variant='h6' className={classes.item} gutterBottom>
                            {food.name}
                        </Typography>
                        <Typography variant='body2'>
                            {food.description} 
                        </Typography>
                        <Typography className={classes.item}>
                            ${food.price}.00
                        </Typography>
                    </Grid>
                    <Grid item>

                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Paper>
        
    )
}
export default ItemCard