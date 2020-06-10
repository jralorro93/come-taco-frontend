import React, {useState, useContext, useEffect} from 'react';

import ItemCard from '../components/ItemCard'

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../App2';

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
  const [shoppingCart, setShoppingCart] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const user = useContext(UserContext)

  useEffect(() => {
    const fetchData = () => {
      setShoppingCart(user.items)
      setIsLoaded(true)
    }
    if (user) {fetchData()}
  }, [user])

  const showCart = shoppingCart.length === 0 ? <h2>Your Shopping Cart is Empty!</h2> : (
    <Grid container className={classes.container}>
      {shoppingCart.map(food => (
        <Grid item>
          <ItemCard food={food} key={food.id} id ={food.id} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
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