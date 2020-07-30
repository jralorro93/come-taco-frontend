import React, {useState, useEffect, useContext} from 'react'

import withFoodCardStyles from '../styles/FoodCard.style'
import handleDelete from '../utils/Cart/handleDelete'
import handleOrderId from '../utils/Cart/handleOrderId'
import { UserContext } from '../App2'

import { Divider, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton} from '@material-ui/core'
import { RemoveShoppingCart } from '@material-ui/icons'



const ItemCard = ({ food, classes, orders}) => {
    
    const [ orderId, setOrderId ] = useState()
    const { user, dispatch } = useContext(UserContext)

    useEffect(() => {
        if (orders) {
            setOrderId(handleOrderId(food.id, orders))
        }
    }, [])
    console.log('this is food', food)
    console.log('user', user)
   return (
        <Card className={classes.card}>
            <CardHeader title={food.name} className={classes.icon}/>
            <CardMedia 
                className={classes.media}
                image={food.imgURL} 
                title={food.name}
            />
            <CardContent>
                <h3 className={classes.icon}>${food.price}</h3>
            </CardContent>
            <Divider />
            <CardActions>
                <IconButton onClick={ () => handleDelete(orderId, food, localStorage, dispatch, user.shoppingCart)}>
                    <RemoveShoppingCart className={classes.icon}/>
                </IconButton>
            </CardActions>
        </Card>
   )
}
export default withFoodCardStyles(ItemCard)

