import React from 'react';

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

const ReceiptContainer = (props) => {
  const classes = useStyles()
  const { shoppingCart, user } = props

  return (
      <div>
        <h2>Your cart</h2>
        {shoppingCart.length === 0 ? <h2>Your Shopping Cart is Empty!</h2> : (
          <Grid container className={classes.container}>
            {shoppingCart.map(food => (
              <Grid item>
                <ItemCard food={food} user={user} handleDelete={props.handleDelete}/>
              </Grid>  
            ))}
          </Grid>
        )}
      </div>
    )
}
export default ReceiptContainer