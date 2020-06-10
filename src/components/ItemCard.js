import React, {useState, useEffect} from 'react'

import withFoodCardStyles from '../styles/FoodCard.style'
import handleDelete from '../utils/Cart/handleDelete'

import { Divider, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton} from '@material-ui/core'
import { RemoveShoppingCart } from '@material-ui/icons'

const ItemCard = ({ food, classes, id, shoppingCart, setShoppingCart}) => {

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
                <IconButton onClick={ () => handleDelete(id, food, localStorage, shoppingCart, setShoppingCart)}>
                    <RemoveShoppingCart className={classes.icon}/>
                </IconButton>
            </CardActions>
        </Card>
   )
}
export default withFoodCardStyles(ItemCard)