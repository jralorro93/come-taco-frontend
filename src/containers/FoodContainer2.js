import React, { useState, useEffect } from 'react';
import axios from 'axios'

import FoodCard from '../components/FoodCard'

import { makeStyles } from '@material-ui/core/styles';
import{ Grid } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1
    }
}))

const FoodContainer2 = () => {
    const { classes } = useStyles()
    const [foodList, setFoodList] = useState({items: []})
    const url = "http://localhost:3000/api/v1/items"

    useEffect(async () => {
        const result = await axios(url)
        setFoodList(result.data)
        console.log(foodList)
    }, [])

    return (
        <div>
            <h1>¡Come Taco!</h1>

        </div>
    )
}
export default FoodContainer2