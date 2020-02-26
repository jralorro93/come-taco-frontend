import React, {useState} from 'react';

import withFoodCardStyles from '../styles/FoodCard.style'
import handleAddToCart from '../utils/Cart/handleAddToCart'

import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Collapse, Divider} from '@material-ui/core'
import { ExpandMore, AddShoppingCart } from '@material-ui/icons'
import clsx from 'clsx';


const FoodCard = (props) => {
    const { classes, food, currentUser } = props

    const [expanded, setExpanded] = useState(false)

    const handleExpandCard = () => {
        setExpanded(!expanded)
    }
    console.log('this is props', props)
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
            <Divider/>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton onClick={() => handleAddToCart(currentUser.user.id, food.id)}>
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
                    <Typography component="p" className={classes.icon}>
                        {food.description}<br/>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
export default withFoodCardStyles(FoodCard)
