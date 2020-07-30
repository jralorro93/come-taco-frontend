import React, { useState, useContext, useEffect } from 'react'
import { Typography, Paper } from '@material-ui/core'

const ItemCard = ({food, classes, orders}) => {
    console.log('this is food', food)
    return (
        <div>
            <Paper>
                <Typography variant='subtitle1' display='block' gutterBottom>
                    {food.name}
                </Typography>
            </Paper>
        </div>
    )
}
export default ItemCard