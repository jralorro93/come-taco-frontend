import React, {useState} from 'react';

import withFoodCardStyles from '../styles/FoodCard.style'
import handleAddToCart from '../utils/Cart/handleAddToCart'

import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Collapse, Divider} from '@material-ui/core'
import { ExpandMore, AddShoppingCart } from '@material-ui/icons'
import clsx from 'clsx';


const FoodCard = (props) => {
    const { classes } = props
    const [expanded, setExpanded] = useState(false)
    const foodPrice = `$ ${props.food.price}`
    const handleExpandCard = () => {
        setExpanded(!expanded)
    }

    return (
        <Card className={classes.card}>
            <CardHeader title={props.food.name} className={classes.icon}/>
            <CardMedia
            className={classes.media}
            image={props.food.imgURL}
            title={props.food.name}
            />
            <CardContent>
                <p style={{fontWeight: 'bold'}} className={classes.icon} >{foodPrice}</p>
            </CardContent>
            <Divider/>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton onClick={() => handleAddToCart(props.currentUser.user.id, props.food.id)}>
                    <AddShoppingCart className={classes.icon} />
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
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
export default withFoodCardStyles(FoodCard)