import React, {useState} from 'react';

import withFoodCardStyles from '../styles/FoodCard.style'
import handleAddToCart from '../utils/Cart/handleAddToCart'

import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Collapse} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import clsx from 'clsx';


const FoodCard2 = (props) => {
    const { classes } = props
    const [expanded, setExpanded] = useState(false)
    const foodPrice = `$ ${props.food.price}`
    const handleExpandCard = () => {
        setExpanded(!expanded)
    }

    return (
        <Card className={classes.card}>
            <CardHeader title={props.food.name} />
            <CardMedia
            className={classes.media}
            image={props.food.imgURL}
            title={props.food.name}
            />
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites" className={classes.icon} onClick={() => handleAddToCart(props.currentUser.user.id, props.food.id)}>
                    <i class="material-icons">add_shopping_cart</i>
                </IconButton>
                <IconButton 
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandCard} 
                    aria-expanded={expanded}
                    aria-label='Show More'
                >
                    <ExpandMore/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography component="p">
                        {props.food.description}<br/>
                    <p className="price" >{foodPrice}</p>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
export default withFoodCardStyles(FoodCard2)