import React, { useState, useContext, useEffect } from 'react'
import { Typography, Paper, Grid, Avatar, IconButton } from '@material-ui/core'
import { RemoveShoppingCart } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../App2';
import handleDelete from '../utils/Cart/handleDelete'

const useStyles = makeStyles(theme => ({
    avatar: {
        marginLeft: '7px',
        marginRight: '9px',
        width: theme.spacing(12),
        height: theme.spacing(12)
    },
    item: {
        textAlign: 'left',
    },
    description: {
        overflowWrap: 'break-word',
        maxWidth: '430px',
        textAlign: 'left',
        marginBottom: '5px'
    }
}))

const ItemCard = ({food, orders}) => {
    const classes = useStyles()
    const [ orderId, setOrderId ] = useState()
    const {user, dispatch} = useContext(UserContext)

    useEffect(()=> {
        return () => {
            console.log('cleaned up?')
        }
    }, [])
    console.log('this is orders', user)
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
                        <Typography className={classes.description}>
                            {food.description} 
                        </Typography>
                        <Typography className={classes.item}>
                            ${food.price}.00
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton >
                            <RemoveShoppingCart color='secondary'/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        
    )
}
export default ItemCard