import React, { useState, useEffect } from 'react'

import ItemCard from '../components/ItemCard'

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        border: '2px solid black',
        maxWidth: '925px',
        marginLeft: '125px',
        marginRight: '125px',
        padding: '20px',
        backgroundColor: "#754F41"
    }
}))


//Coment
const ReceiptContainer2 = (props) => {
    const classes = useStyles()
    const [newCart, setNewCart] = useState([])

    useEffect(() => {
        setNewCart(props.shoppingCart)
    }, [])
    return (
        <div>
            <h1>Your Cart</h1>
            { props.shoppingCart.length === 0 ? <h3>Your cart is empty!</h3> : (
                <Grid container className={classes.container}>
                    {newCart.map(food =>( 
                        <Grid item>
                            <ItemCard food={food} user={props.user} handleDelete={props.handleDelete}/>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    )
}
export default ReceiptContainer2