import React from 'react';

import withFoodCardStyles from '../styles/FoodCard.style'
import handleAddToCart from '../utils/Cart/handleAddToCart'

import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography} from '@material-ui/core'


const FoodCard2 = (props) => {
    const { classes } = props
    const foodPrice = `$ ${props.food.price}`
    return (
        <Card className={classes.card}>
            <CardHeader title={props.food.name} />
            <CardMedia
            className={classes.media}
            image={props.food.imgURL}
            title={props.food.name}
            />
            <CardContent>
            <Typography component="p">
                {props.food.description}<br/>
            <p className="price" >{foodPrice}</p>
            </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites" onClick={() => handleAddToCart(props.currentUser.user.id, props.food.id)}>
                <i class="material-icons">add_shopping_cart</i>
            </IconButton>
            </CardActions>
        </Card>
    )
}
export default withFoodCardStyles(FoodCard2)