import React, {useState, useEffect} from 'react'

import withFoodCardStyles from '../styles/FoodCard.style'

import { Divider, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton} from '@material-ui/core'
import { RemoveShoppingCart } from '@material-ui/icons'

const ItemCard2 = (props) => {
    const { food, classes, orders } = props
    const [foodOrderId, setFoodOrderId] = useState('')

    
    useEffect(() => {
        let orderId = props.user.user.orders.find(order => order.item_id === food.id)
        console.log('this is orderid', orderId.id)
        console.log('this is food', food.name)
        setFoodOrderId(orderId.id)
    }, [])

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
                <IconButton onClick={ () => props.handleDelete(foodOrderId, food)}>
                    <RemoveShoppingCart className={classes.icon}/>
                </IconButton>
            </CardActions>
        </Card>
   )
}
export default withFoodCardStyles(ItemCard2)