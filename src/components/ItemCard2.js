import React, { useState, useContext, useEffect } from 'react'
import { Typography, Paper, Grid, Avatar, IconButton } from '@material-ui/core'
import { RemoveShoppingCart } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../App2';
import handleDelete from '../utils/Cart/handleDelete'
import handleOrderId from '../utils/Cart/handleOrderId'

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: '6px 9px 6px 7px',
        width: theme.spacing(12),
        height: theme.spacing(12)
    },
    item: {
        textAlign: 'left',
        position: 'relative'
    },
    description: {
        overflowWrap: 'break-word',
        maxWidth: '430px',
        textAlign: 'left',
        marginBottom: '5px'
    },
    body: {
        minWidth: '430px',
        marginTop: '3px'
    }
}))

const ItemCard = ({food, orders}) => {
    const classes = useStyles()
    const [ orderId, setOrderId ] = useState()
    const {user, dispatch} = useContext(UserContext)

    useEffect(()=> {
        setOrderId(handleOrderId(food.id, user.user.orders))
        return () => {
            console.log(' ')
        }
    }, [])
    
    return (
        
            <Paper>
                <Grid container >
                    <Grid item>
                        <Avatar alt={food.name} src={food.imgURL} className={classes.avatar}/>
                    </Grid>
                    <Grid item className={classes.body}>
                        <Typography variant='h6' className={classes.item} >
                            {food.name}
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                            {food.description} 
                        </Typography>
                        <Typography className={classes.item} gutterBottom>
                            ${food.price}.00
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => handleDelete(orderId, food, localStorage, dispatch, user.shoppingCart)} >
                            <RemoveShoppingCart color='secondary'/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        
    )
}
export default ItemCard