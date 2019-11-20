import React from 'react';

import useGlobal from '../store/store'
import ItemCard from '../components/ItemCard2'

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

  const [cart, deleteFromCart] = useGlobal(
    state => state.shoppingCart,
    actions => actions.deleteFromCart
  )
  console.log(useGlobal())
  return (
      <div>
        <h2>Your cart</h2>
        { cart.length === 0 ? <h2>Your Cart Is Empty!</h2> : (
          <Grid container className={classes.container}>
            {cart.map(food => (
              <Grid item>
                <ItemCard food={food} user={props.user} handleDelete={props.handleDelete}/>
            </Grid>
            ))}
          </Grid>
        )}
      </div>
    )
}
export default ReceiptContainer