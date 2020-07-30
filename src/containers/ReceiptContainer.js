import React, {useState, useContext, useEffect} from 'react';

import ItemCard from '../components/ItemCard2'
import handleOrderId from '../utils/Cart/handleOrderId'

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../App2';

// For the first one
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

// const useStyles = makeStyles(theme => ({
//   container: {
    
//   }  
// }))

const ReceiptContainer = (props) => {
  const classes = useStyles()
  const [isLoaded, setIsLoaded] = useState(false)

  const { user, dispatch } = useContext(UserContext)

  useEffect(() => {
    if (user) { setIsLoaded(true) }
  }, [])

  const showCart = user.shoppingCart.length === 0 ? <h2>Your Shopping Cart is Empty!</h2> : (
    <Grid container className={classes.container}>
      {user.shoppingCart.map(food => (
        <Grid item>
          <ItemCard food={food} key={food.id} orders={user.user.orders}/>
        </Grid>  
      ))}
    </Grid>
  )

  return (
      <div>
        <h2>Your cart</h2>
        {isLoaded ? showCart : <h2>Loading...</h2>}
      </div>
    )
}
export default ReceiptContainer